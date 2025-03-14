# MatematecAR

## Setup

Siga as instruções do site https://docs.expo.dev/get-started/set-up-your-environment/

Lembre de selecionar o environment que o aplicativo deve ser executado.

## Vamos começar!

1. Instale as dependências

   ```bash
   npm install
   ```

2. Realize o prebuild

O Viro (motor AR utilizado) não suporta o Expo GO. Então, é necessário realizar o build do projeto localmente.

```bash
 npx expo prebuild
```

3. Build o projeto localmente

   ```bash
    npx expo run
   ```

4. Corrija a build

## Android

O Viro modifica os arquivos de forma incorreta. Então, modifique o arquivo **MainApplication.kt** para o arquivo abaixo:

```
package com.xnths.matematecar
import com.viromedia.bridge.ReactViroPackage

import android.app.Application
import android.content.res.Configuration

import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.ReactHost
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.load
import com.facebook.react.defaults.DefaultReactNativeHost
import com.facebook.react.soloader.OpenSourceMergedSoMapping
import com.facebook.soloader.SoLoader

import expo.modules.ApplicationLifecycleDispatcher
import expo.modules.ReactNativeHostWrapper

class MainApplication : Application(), ReactApplication {

  override val reactNativeHost: ReactNativeHost = ReactNativeHostWrapper(
        this,
        object : DefaultReactNativeHost(this) {
          override fun getPackages(): List<ReactPackage> {
            val packages = PackageList(this).packages
            // Packages that cannot be autolinked yet can be added manually here, for example:
            // packages.add(new MyReactNativePackage());

            packages.add(ReactViroPackage(ReactViroPackage.ViroPlatform.AR))
            packages.add(ReactViroPackage(ReactViroPackage.ViroPlatform.GVR))

            return packages
          }

          override fun getJSMainModuleName(): String = ".expo/.virtual-metro-entry"

          override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG

          override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
          override val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED
      }
  )

  override val reactHost: ReactHost
    get() = ReactNativeHostWrapper.createReactHost(applicationContext, reactNativeHost)

  override fun onCreate() {
    super.onCreate()
    SoLoader.init(this, OpenSourceMergedSoMapping)
    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
      // If you opted-in for the New Architecture, we load the native entry point for this app.
      load()
    }
    ApplicationLifecycleDispatcher.onApplicationCreate(this)
  }

  override fun onConfigurationChanged(newConfig: Configuration) {
    super.onConfigurationChanged(newConfig)
    ApplicationLifecycleDispatcher.onConfigurationChanged(this, newConfig)
  }
}

```

## iOS

### Dependências

Note, que o desenvolvimento e teste de aplicativos para iOS necessita dos produtos da Apple. Isso significa que não será possivel continuar as instruções abaixo caso você não estaja utilizando um **macOS** e um **iPhone** com sistema operacional pelo menos 18.3 (Sequoia).

### SDK da Apple

Instale **Xcode** pela Apple Store.

Após a instalação, conecte o iPhone ao computador usando um cabo USB-c.

Com o Xcode aberto, vá às configurações do iPhone e procure por **Security & Privacy**. No final da página aparecerá Developer mode. Ative esse modo e reinicie o dispositivo. Siga as instruções no aparelho.

### Instalação das dependências do POD

Na pasta do projeto, rode o comando abaixo:

```
npx pod-install
```

**Atenção:** se a SDK não estiver instalada corretamente, o comando acima não irá funcionar.

Depois, vá à basta \*_ios_ e rode o comando

```
pod install
```

Por fim, adicione o código abaixo no arquivo **ios/matemateca/info.plist**:

```
  <key>NSCameraUsageDescription</key>
  <string>The camera is needed for AR functionality</string>
```
