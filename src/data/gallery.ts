export type GalleryItem = {
  id: string;
  title: string;   // e.g., "Center Console"
  model: string;   // e.g., "Ferrari F430"
  image: string;   // "/assets/YourFileBA.jpg"
  caption: string; // short description
};

export const GALLERY: GalleryItem[] = [
  {
    id: "Instrument Cluster Buttons",
    title: "Instrument Cluster Buttons",
    model: "Ferrari California",
    image: "/assets/InstrumentClusterCaliBA.jpg",
    caption: "Instrument cluster buttons restored from sticky and faded to smooth with sharp, factory-like icons."
  },
  {
    id: "Mirror Adjustment Knob",
    title: "Mirror Adjustment Knob",
    model: "Ferrari 458",
    image: "/assets/MirrorAdjBA.jpg",
    caption: "Mirror adjustment knob restored from worn and peeling to a clean, smooth factory-like finish."
  },
  {
    id: "Exterior Light Knob",
    title: "Exterior Light Knob",
    model: "Ferrari 458",
    image: "/assets/ExteriorLightKnobBA.jpg",
    caption: "Exterior light knob restored from scratched and glossy wear to a clean matte finish with clear markings."
  },
  {
    id: "AC Control Unit",
    title: "AC Control Unit",
    model: "Ferrari 458",
    image: "/assets/ACControlUnitBA.jpg",
    caption: "AC control unit restored from heavy wear and fading to crisp, legible icons with smooth controls."
  },
  {
    id: "Maserati Shift Indicator",
    title: "Maserati Shift Indicator",
    model: "Maserati GranTurismo",
    image: "/assets/maseratiGtShiftIndicator.jpg",
    caption: "The original shift indicator had lost all visible markings and illumination. Through stencil recreation and refinishing, it was restored to factory-correct clarity with a clean illuminated finish."
  },
  {
    id: "Turn Signal Button",
    title: "Turn Signal Button",
    model: "Ferrari 458",
    image: "/assets/TurnSignalBA.jpg",
    caption: "Turn signal button restored from worn and rough to a smooth, matte factory finish."
  },
  {
    id: "Left TFT Controls",
    title: "Left TFT Controls",
    model: "Ferrari 458",
    image: "/assets/LeftTFTBA.jpg",
    caption: "Left TFT console restored from scratched and sticky to smooth, precise buttons with crisp icons."
  },
  {
    id: "Right TFT Controls",
    title: "Right TFT Controls",
    model: "Ferrari 458",
    image: "/assets/RightTFTBA.jpg",
    caption: "Right TFT console restored from sticky and glossy wear to a smooth matte finish with clean, legible buttons."
  },
  {
    id: "Bridge Buttons",
    title: "Bridge Buttons",
    model: "Ferrari 458",
    image: "/assets/BridgeButtonsBA.jpg",
    caption: "Center bridge buttons restored from peeling and faded to a smooth finish with crisp lettering."
  },
  {
    id: "Window Switch Group with Trim",
    title: "Window Switch Group with Trim",
    model: "Maserati GranTurismo",
    image: "/assets/WindowSwitchMaseratiGT.jpg",
    caption: "Switch group refinished to a clean, matte factory look, eliminating sticky and worn surfaces."
  },
  {
    id: "F430 Ashtray Cover",
    title: "F430 Ashtray Cover",
    model: "Ferrari F430",
    image: "/assets/F430AshBA.jpg",
    caption: "F430 ashtray cover restored from sticky and dull to a clean matte finish."
  }
];
