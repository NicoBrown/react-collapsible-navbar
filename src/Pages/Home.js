import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Home() {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    frameworkUrl: "/build/metablok/build.framework.js",
    loaderUrl: "/build/metablok/Build.loader.js",
    codeUrl: "/build/metablok/build.wasm",
    dataUrl: "/build/metablok/webgl.data",
  });
  // We'll round the loading progression to a whole number to represent the
  // percentage of the Unity Application that has loaded.
  const loadingPercentage = Math.round(loadingProgression * 100);

  return (
    <div className="container">
      {isLoaded === false && (
        // We'll conditionally render the loading overlay if the Unity
        // Application is not loaded.
        <div className="loading-overlay">
          <p>Loading... ({loadingPercentage}%)</p>
        </div>
      )}
      <Unity
        className="unity"
        style={{
          height: window.innerHeight,
          width: window.innerWidth - 100,
        }}
        unityProvider={unityProvider}
      />
    </div>
  );
}
