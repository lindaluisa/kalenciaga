import React from "react";
import { JuiceList } from "../JuicesScreen/JuiceList";

export const FastingScreen = () => {
  return (
    <div>
      <h1 className="text-center kaleTitle">Juice Fast</h1>

      <JuiceList category="Fast" />
    </div>
  )
}