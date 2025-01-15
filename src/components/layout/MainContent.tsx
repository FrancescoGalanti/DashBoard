import MenteeContextProvider from "../context/MenteeContextProvider";
import SearchContextProvider from "../context/SearchContextProvider";
import CardLayout from "../dashboard/CardLayout";
import DashBoardBottom from "../dashboard/DashBoardBottom";
import DashboardHeader from "../dashboard/DashboardHeader";
import DashBoardTop from "../dashboard/DashBoardTop";
import DetailUserCard from "../dashboard/DetailUserCard";
import SearchForm from "../dashboard/SearchForm";
import Stats from "../dashboard/Stats";
import UserCardList from "../dashboard/UserCardList";


export default function MainContent() {
    return (
        <main className="grow">
            <MenteeContextProvider>
                <SearchContextProvider>
                    <DashBoardTop>
                        <DashboardHeader />
                        <Stats />
                    </DashBoardTop>
                    <DashBoardBottom className="mb-6 -mt-28">
                        <SearchForm />
                        <CardLayout className="col-start-1 col-span-1 row-start-2 row-span-full">
                            <UserCardList />
                        </CardLayout>
                        <CardLayout className=" col-start-2 col-span-2 row-span-full">
                            <DetailUserCard />
                        </CardLayout>
                    </DashBoardBottom>
                </SearchContextProvider>
            </MenteeContextProvider>

        </main>
    )
}
