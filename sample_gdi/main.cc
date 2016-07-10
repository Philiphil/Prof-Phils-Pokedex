#include "../common/application.h"
#include "../common/view.h"
#include "../common/method_dispatcher.h"
#include <Awesomium/WebCore.h>
#include <Awesomium/STLHelpers.h>
#include <Awesomium\DataPak.h>
#include "nature.h"
#include "comparator.h"
#include "type.h"
#include "pokemon.h"
#include "db.h"
#include "info.h"
#ifdef _WIN32
#include <Windows.h>
#endif

using namespace Awesomium;

class GDISample : public Application::Listener {
  Application* app_;
  View* view_;
  MethodDispatcher method_dispatcher_;
 public:
  GDISample() 
    : app_(Application::Create()),
      view_(0) {
    app_->set_listener(this);
  }

  virtual ~GDISample() {
    if (view_)
      app_->DestroyView(view_);
    if (app_)
      delete app_;
  }

  void Run() {
    app_->Run();
  }

  // Inherited from Application::Listener
  virtual void OnLoaded() {
    view_ = View::Create(500, 600);
	BindMethods(view_->web_view());
    view_->web_view()->LoadURL(WebURL(WSLit("file:///loadingscreen.html")));
  }


  void BindMethods(WebView* web_view) {
	  // Create a Global JS Object named 'App'
	  JSValue result = web_view->CreateGlobalJavascriptObject(WSLit("App"));
	  if (result.IsObject()) {
		  // Bind our custom methods to it.
		  JSObject& app_object = result.ToObject();
		  method_dispatcher_.Bind(app_object,
			  WSLit("popUp"),
			  JSDelegate(this, &GDISample::popUp));
		  method_dispatcher_.Bind(app_object,
			  WSLit("addPokemon"),
			  JSDelegate(this, &GDISample::addPokemon));
		  method_dispatcher_.Bind(app_object,
			  WSLit("exit"),
			  JSDelegate(this, &GDISample::exit));

		  method_dispatcher_.BindWithRetval(app_object,
			  WSLit("getComparable"),
			  JSDelegateWithRetval(this, &GDISample::getComparable));

		  method_dispatcher_.BindWithRetval(app_object,
			  WSLit("getTypes"),
			  JSDelegateWithRetval(this, &GDISample::getTypes));

		  method_dispatcher_.BindWithRetval(app_object,
			  WSLit("init"),
			  JSDelegateWithRetval(this, &GDISample::init));
	  }
	  web_view->set_js_method_handler(&method_dispatcher_);
  }
  void popUp(WebView* caller,	  const JSArray& args) 
  {
	  JSValue fnord;
	  WebString dayeum;
	  std::string bordel;
	  char* shiiit = new char();
	  fnord = args.At(0);
	  dayeum = fnord.ToString();
	  dayeum.ToUTF8(shiiit, dayeum.length());
	  bordel = shiiit;
	  bordel = bordel.substr(0, dayeum.length());
	  app_->ShowMessage(bordel.c_str());
  }

  JSValue getTypes(WebView* caller, const JSArray& args)
  {
	  JSValue fnord;
	  WebString dayeum;
	  std::string bordel;
	  char* shiiit = new char();
	  fnord = args.At(0);
	  dayeum = fnord.ToString();
	  dayeum.ToUTF8(shiiit, dayeum.length());
	  bordel = shiiit;
	  bordel = bordel.substr(0, dayeum.length());

	  int foo = stoi(bordel);
	  info types = pokemon::dbdex.at(foo);
	  int typeun = (int) types.type1;
	  int typede = (int)types.type2;
	  std::string type1t = std::to_string(typeun);
	  std::string type2t = std::to_string(typede);
	  JSArray Justiceleague = JSArray();

	  const char* cstr1= type1t.c_str();
	  const char* cstr2 = type2t.c_str();
	  Justiceleague.Push(WSLit(cstr1));
	  Justiceleague.Push(WSLit(cstr2));

	  JSValue retour = Justiceleague;
	  return retour;
  }

  void addPokemon(WebView* caller,
	  const JSArray& args) {
	  JSValue fnord;
	  WebString dayeum;
	  std::string bordel;
	  char* shiiit = new char();
	  fnord = args.At(0);
	  dayeum = fnord.ToString();
	  dayeum.ToUTF8(shiiit, dayeum.length());
	  bordel = shiiit;
	  bordel = bordel.substr(0, dayeum.length());
	  pokemon pkmn = pokemon();
	  pkmn.fromString(bordel);
	  pokemon_write(pkmn);
  }
  
  void exit(WebView* caller,
	  const JSArray& args) {
	  app_->Quit();
  }

  JSValue getComparable(WebView* caller, const JSArray& args)
  {
	  JSValue fnord;
	  WebString dayeum;
	  std::string bordel;
	  char* shiiit = new char();
	  fnord = args.At(0);
	  dayeum = fnord.ToString();
	  dayeum.ToUTF8(shiiit, dayeum.length());
	  bordel = shiiit;
	  bordel = bordel.substr(0, dayeum.length());

	  JSArray Justiceleague = JSArray();
	  JSValue retour;
	  pokemon pkmn = pokemon();
	  pkmn.fromString(bordel);
	  std::vector<pokemon> foo = compareToOthers(pkmn);
	  if (foo.size() > 0)
	  {
		  for (int i = 0; i < foo.size(); i++)
		  {
			  std::string tmp = foo[i].toString();
			  Justiceleague.Push(WSLit(tmp.c_str()));
		  }
	  }
	  retour = Justiceleague;
	  return retour;
  }

  JSValue init(WebView* caller, const JSArray& args)
  {
	  dbinit();
	  pokemon::dexinit();

	  
	  JSValue retour= JSValue(1);
	  return retour;
  }



  // Inherited from Application::Listener
  virtual void OnUpdate() {
  }

  // Inherited from Application::Listener
  virtual void OnShutdown() {
  }
};

int APIENTRY wWinMain(HINSTANCE hInstance, HINSTANCE, wchar_t*, 
  int nCmdShow) {


  GDISample sample;
  sample.Run();
 

  return 0;
}
