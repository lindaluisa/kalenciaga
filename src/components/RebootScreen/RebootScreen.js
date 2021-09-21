import React from "react";


import { JuiceList } from "../JuicesScreen/JuiceList";

export const RebootScreen = () => {
  return (
    <div>
      <h1 className="text-center kaleTitle">Reboot</h1>

        <JuiceList category="Reboot" />
    
    </div>
  );
};
