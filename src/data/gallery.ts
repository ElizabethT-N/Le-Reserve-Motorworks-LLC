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
    id: "Parking Brake",
    title: "Parking Brake",
    model: "Ferrari 458",
    image: "/assets/ParkingBrakeBA.jpg",
    caption: "Parking brake buttons restored from sticky and faded to clean, sharp, factory-like clarity."
  },
  {
    id: "Turn Signal Stalk",
    title: "Turn Signal Stalk",
    model: "Ferrari 458",
    image: "/assets/TurnSignalBA.jpg",
    caption: "Turn signal stalk restored from worn and rough to a smooth, matte factory finish."
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
    id: "Center Console",
    title: "Center Console",
    model: "Ferrari F430",
    image: "/assets/F430CenterConsoleBA.jpg",
    caption: "F430 center console restored from sticky, worn finish to a clean and uniform factory appearance."
  },
  {
    id: "F430 Ashtray Cover",
    title: "F430 Ashtray Cover",
    model: "Ferrari F430",
    image: "/assets/F430AshBA.jpg",
    caption: "F430 ashtray cover restored from sticky and dull to a clean matte finish."
  }
];
