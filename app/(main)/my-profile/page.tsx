import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar, Edit, MapPin, Settings, Star, Trophy, User } from "lucide-react";

export default function MyProfile() {
  return (
    <div className="min-h-screen bg-background pb-10">
      {/* Header / Banner Section */}
      <div className="relative h-48 md:h-64 w-full bg-gradient-to-r from-primary/80 to-secondary overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-black/10" />
        {/* Decorative circles */}
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/4 h-32 w-32 rounded-full bg-white/5 blur-2xl" />
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
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
          <div className="flex-1 text-center md:text-left mt-2 md:mt-0 md:mb-4">
            <h1 className="text-3xl font-bold text-foreground">Bruno Jiménez</h1>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sobre mí</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Apasionado del fútbol internacional. Me encanta analizar tácticas y seguir a las jóvenes promesas. ¡Hala Madrid! ⚽️
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
          </div>

          {/* Main Content - Reviews Feed */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Reseñas Recientes</h2>
              <Button variant="ghost" size="sm">Ver todas</Button>
            </div>

            {/* Review Item 1 */}
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

            {/* Review Item 2 */}
            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="bg-muted w-full md:w-32 flex flex-col items-center justify-center p-4 border-r border-border/50">
                  <span className="text-xs font-bold text-muted-foreground uppercase">OCT</span>
                  <span className="text-2xl font-bold">24</span>
                  <span className="text-xs text-muted-foreground">2024</span>
                </div>
                <div className="p-5 flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-lg">Manchester City vs Arsenal</h3>
                      <p className="text-sm text-muted-foreground">Etihad Stadium • Premier League</p>
                    </div>
                    <div className="flex items-center bg-primary/10 text-primary px-2 py-1 rounded text-sm font-bold">
                      <Star className="h-3 w-3 mr-1 fill-current" /> 8.0
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    Partido muy táctico, pocas oportunidades claras pero mucho nivel técnico. Un empate justo al final.
                  </p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-secondary px-2 py-1 rounded-full text-secondary-foreground">Táctico</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
