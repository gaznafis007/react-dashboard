import NavCard from "../../Components/NavCard/NavCard";
import { BookmarkIcon,BookOpenIcon,CalendarDateRangeIcon, ChatBubbleBottomCenterIcon, ClipboardDocumentCheckIcon, Cog8ToothIcon, FlagIcon, HomeIcon, PresentationChartBarIcon, ServerIcon, Squares2X2Icon } from "@heroicons/react/24/outline";


const items = [
    {
        title:"dashboard",
        path:"/",
        icon: <Squares2X2Icon className="size-6"></Squares2X2Icon>
    },
    {
        title:"dogs",
        path:"/dogs",
        icon: <BookmarkIcon className="size-6"></BookmarkIcon>
    },
    {
        title:"book",
        path:"/books",
        icon: <BookOpenIcon className="size-6"></BookOpenIcon>
    },
    {
        title:"chat",
        path:"/chat",
        icon: <ChatBubbleBottomCenterIcon className="size-6"></ChatBubbleBottomCenterIcon>
    },
    {
        title:"service",
        path:"/service",
        icon: <ServerIcon className="size-6"></ServerIcon>
    },
    {
        title:"calender",
        path:"/calender",
        icon: <CalendarDateRangeIcon className="size-6"></CalendarDateRangeIcon>
    },
    {
        title:"report",
        path:"/report",
        icon: <FlagIcon className="size-6"></FlagIcon>
    },
    {
        title:"client reports",
        path:"/clientReports",
        icon: <ClipboardDocumentCheckIcon className="size-6"></ClipboardDocumentCheckIcon>
    },
    {
        title:"rescued dogs",
        path:"/rescuedDogs",
        icon: <HomeIcon className="size-6"></HomeIcon>
    },
    {
        title:"community",
        path:"/community",
        icon: <PresentationChartBarIcon className="size-6"></PresentationChartBarIcon>
    },
    {
        title:"settings",
        path:"/settings",
        icon: <Cog8ToothIcon className="size-6"></Cog8ToothIcon>
    },

]
const SideNav = () => {
    return (
        <aside className="w-1/4 h-screen bg-blue-500 border-r border-white p-3">
            <h2 className="text-2xl text-white text-center font-bold">Carnine karma</h2>
            <div className="flex flex-col gap-3 mt-12">
                {
                    items.map((item,idx) =>(
                        <NavCard key={idx} title={item.title} path={item.path}>{item?.icon}</NavCard>
                    ))
                }
            </div>
        </aside>
    );
};

export default SideNav;