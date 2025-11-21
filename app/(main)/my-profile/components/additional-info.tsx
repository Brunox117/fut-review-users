import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";

export default function AdditionalInfo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg">Sobre mí</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                    Apasionado del fútbol internacional. Me encanta analizar tácticas y seguir a las jóvenes promesas. ¡Visca Barça! ⚽️
                </p>
                <Separator className="my-4" />
                <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Ligas Favoritas</span>
                        <span className="font-medium">La Liga, Premier</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Posición (Juego)</span>
                        <span className="font-medium">Mediocampista</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}