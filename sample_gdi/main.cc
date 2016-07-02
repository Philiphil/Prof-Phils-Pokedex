#include "../common/application.h"
#include "../common/view.h"
#include "../common/method_dispatcher.h"
#include <Awesomium/WebCore.h>
#include <Awesomium/STLHelpers.h>
#include <Awesomium\DataPak.h>
#ifdef _WIN32
#include <Windows.h>
#include "nature.h"
#include "type.h"
#include "pokemon.h"
#include "db.h"
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

    view_->web_view()->LoadURL(WebURL(WSLit("file:///index.html")));
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
	  }
	  web_view->set_js_method_handler(&method_dispatcher_);
  }
  void popUp(WebView* caller,
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

	  app_->ShowMessage(bordel.c_str());
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

  // Inherited from Application::Listener
  virtual void OnUpdate() {
  }

  // Inherited from Application::Listener
  virtual void OnShutdown() {
  }
};

int APIENTRY wWinMain(HINSTANCE hInstance, HINSTANCE, wchar_t*, 
  int nCmdShow) {

 dbinit();

  GDISample sample;
  sample.Run();

  return 0;
}
