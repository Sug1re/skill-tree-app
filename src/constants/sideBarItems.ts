import { SvgIconComponent } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonIcon from "@mui/icons-material/Person";

type SideBarItem = {
  id: string;
  icon: SvgIconComponent;
  label: string;
  fontSize: number;
};

export const SIDE_BAR_TOP: SideBarItem[] = [
  { id: "home", icon: HomeIcon, label: "Home", fontSize: 32 },
  { id: "add", icon: AddIcon, label: "プロジェクト作成", fontSize: 28 },
  { id: "search", icon: SearchIcon, label: "検索", fontSize: 28 },
  { id: "settings", icon: SettingsIcon, label: "設定", fontSize: 28 },
];

export const SIDE_BAR_BOTTOM: SideBarItem[] = [
  { id: "profileAdd", icon: PersonAddIcon, label: "新規追加", fontSize: 28 },
  { id: "profile", icon: PersonIcon, label: "プロフィール", fontSize: 32 },
];