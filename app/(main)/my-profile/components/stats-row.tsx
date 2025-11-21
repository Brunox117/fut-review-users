import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Star } from "lucide-react";

export default function StatsRow() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Stats Cards */}
            <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                    <Trophy className="h-8 w-8 text-primary mb-2" />
                    <span className="text-3xl font-bold">127</span>
                    <span className="text-sm text-muted-foreground">Partidos Vistos</span>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                    <Star className="h-8 w-8 text-yellow-500 mb-2" />
                    <span className="text-3xl font-bold">4.8</span>
                    <span className="text-sm text-muted-foreground">Promedio Calificación</span>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                    <div className="h-8 w-8 rounded-full bg-blue-600 mb-2" /> {/* Placeholder team logo */}
                    <span className="text-xl font-bold">Real Madrid</span>
                    <span className="text-sm text-muted-foreground">Equipo más visto</span>
                </CardContent>
            </Card>
        </div>
    )
}