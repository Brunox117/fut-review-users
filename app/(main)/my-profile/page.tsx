import { Button } from "@/components/ui/button";
import { Calendar, Edit, MapPin, Settings, User } from "lucide-react";
import ProfileInfo from "./components/additional-info";
import ReviewsComponent from "./components/reviews-component";
import StatsRow from "./components/stats-row";
import AdditionalInfo from "./components/additional-info";
import UserHeader from "./components/user-header";

export default function MyProfile() {
  return (
    <div className="min-h-screen bg-background pb-10">
      <UserHeader />

      <StatsRow />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar Info */}
        <div className="space-y-6">
          <AdditionalInfo />
        </div>

        {/* Main Content - Reviews Feed */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Reseñas Recientes</h2>
            <Button variant="ghost" size="sm">Ver todas</Button>
          </div>
          <ReviewsComponent />
          <ReviewsComponent />
        </div>
      </div>
    </div>
  );
}
