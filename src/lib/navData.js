import HomeIcon from "@mui/icons-material/Home";
import Preview from "@mui/icons-material/Preview";
import AltRoute from "@mui/icons-material/AltRoute";
import BarChart from "@mui/icons-material/BarChart";
import ViewInAr from "@mui/icons-material/ViewInAr";
import Insights from "@mui/icons-material/Insights";
import RequestQuote from "@mui/icons-material/RequestQuote";

export const navData = [
  {
    id: 0,
    icon: <ViewInAr />,
    text: "Metablok",
    link: "/",
  },
  {
    id: 1,
    icon: <Preview />,
    text: "Model Viewer",
    link: "explore",
  },
  {
    id: 2,
    icon: <AltRoute />,
    text: "Configurator",
    link: "configurator",
  },
  {
    id: 3,
    icon: <BarChart />,
    text: "Environmental Data",
    link: "emissions",
  },
  {
    id: 4,
    icon: <Insights />,
    text: "Energy Efficiency",
    link: "effeciency",
  },
  {
    id: 5,
    icon: <RequestQuote />,
    text: "Cost Analysis",
    link: "finance",
  },
];
