import { Button } from "@/components/ui/button";
import { User, Edit, MapPin, Calendar, Settings } from "lucide-react";

export default function UserHeader() {
    return (
        <>
            {/* Header / Banner Section */}
            <div className="relative h-48 md:h-64 w-full bg-gradient-to-r from-primary/80 to-secondary overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-black/10" />
            </div>

            <div className="container mx-auto px-4 max-w-5xl mt-6">
                <div className="relative -mt-20 mb-8 flex flex-col items-center md:items-end md:flex-row gap-6">
                    {/* Avatar Profile */}
                    <div className="relative">
                        <div className="h-32 w-32 md:h-40 md:w-40 rounded-full border-4 border-background bg-muted flex items-center justify-center overflow-hidden shadow-xl">
                            {/* Placeholder for user image */}
                            <User className="h-16 w-16 text-muted-foreground" />
                        </div>
                        <Button
                            size="icon"
                            variant="secondary"
                            className="absolute bottom-2 right-2 rounded-full shadow-md h-8 w-8 md:h-10 md:w-10"
                        >
                            <Edit className="h-4 w-4" />
                        </Button>
                    </div>

                    {/* User Info */}
                    <div className="flex-1 text-center md:text-left mt-2">
                        <h1 className="text-2xl font-bold text-foreground">Bruno Jiménez</h1>
                        <p className="text-muted-foreground font-medium">@brunofutbol</p>
                        <div className="flex items-center justify-center md:justify-start gap-4 mt-2 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" /> CDMX, México
                            </span>
                            <span className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" /> Miembro desde 2023
                            </span>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 mt-4 md:mt-0 md:mb-6">
                        <Button variant="outline" className="gap-2">
                            <Settings className="h-4 w-4" /> Configuración
                        </Button>
                        <Button className="gap-2">
                            Editar Perfil
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}