import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function ReviewsComponent() {
    return (
        <Card className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row">
                <div className="bg-muted w-full md:w-32 flex flex-col items-center justify-center p-4 border-r border-border/50">
                    <span className="text-xs font-bold text-muted-foreground uppercase">OCT</span>
                    <span className="text-2xl font-bold">28</span>
                    <span className="text-xs text-muted-foreground">2024</span>
                </div>
                <div className="p-5 flex-1">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className="font-bold text-lg">El Clásico: Real Madrid vs Barcelona</h3>
                            <p className="text-sm text-muted-foreground">Santiago Bernabéu • La Liga</p>
                        </div>
                        <div className="flex items-center bg-primary/10 text-primary px-2 py-1 rounded text-sm font-bold">
                            <Star className="h-3 w-3 mr-1 fill-current" /> 9.5
                        </div>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        Un partido increíble con una intensidad brutal desde el primer minuto. Vinicius estuvo imparable y la defensa del Madrid muy sólida. El ambiente en el estadio fue eléctrico.
                    </p>
                    <div className="flex gap-2">
                        <span className="text-xs bg-secondary px-2 py-1 rounded-full text-secondary-foreground">Intenso</span>
                        <span className="text-xs bg-secondary px-2 py-1 rounded-full text-secondary-foreground">Golazos</span>
                    </div>
                </div>
            </div>
        </Card>
    )
}