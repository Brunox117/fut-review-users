import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Star, Trophy, Share2, Eye, MessageCircle } from "lucide-react";

export default async function MatchPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Mock Data
  const match = {
    id: "1",
    homeTeam: {
      name: "Real Madrid",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png",
      score: 3,
      color: "from-white to-slate-200",
    },
    awayTeam: {
      name: "Barcelona",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",
      score: 1,
      color: "from-blue-800 to-red-800",
    },
    competition: "La Liga",
    date: "2023-10-28",
    time: "20:00",
    venue: "Santiago Bernabéu",
    attendance: "85,000",
    referee: "Gil Manzano",
    stats: {
      possession: [48, 52],
      shots: [14, 12],
      shotsOnTarget: [6, 4],
      corners: [5, 4],
      fouls: [12, 10],
    },
    lineups: {
      home: ["Courtois", "Carvajal", "Rüdiger", "Alaba", "Mendy", "Tchouaméni", "Valverde", "Kroos", "Bellingham", "Rodrygo", "Vinícius Jr."],
      away: ["Ter Stegen", "Cancelo", "Araújo", "Christensen", "Balde", "Romeu", "Gündogan", "Gavi", "Fermín", "Félix", "Torres"],
    },
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden bg-slate-950 text-white rounded-2xl">
        {/* Background Gradient / Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black opacity-90 z-0" />

        {/* Decorative Circles */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
          <div className="flex flex-col items-center justify-center space-y-8">

            {/* Competition Badge */}
            <Badge variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-0 px-4 py-1 text-sm uppercase tracking-wider backdrop-blur-md">
              <Trophy className="w-3 h-3 mr-2" />
              {match.competition}
            </Badge>

            {/* Scoreboard */}
            <div className="flex items-center justify-center w-full max-w-4xl gap-8 md:gap-16">
              {/* Home Team */}
              <div className="flex flex-col items-center gap-4 flex-1 text-center">
                <div className="relative w-24 h-24 md:w-32 md:h-32 bg-white/5 rounded-full p-4 backdrop-blur-sm border border-white/10 shadow-2xl">
                  <img src={match.homeTeam.logo} alt={match.homeTeam.name} className="w-full h-full object-contain" />
                </div>
                <h2 className="text-xl md:text-3xl font-bold tracking-tight">{match.homeTeam.name}</h2>
              </div>

              {/* Score */}
              <div className="flex flex-col items-center gap-2">
                <div className="text-5xl md:text-8xl font-black tracking-tighter flex items-center gap-4 font-mono">
                  <span>{match.homeTeam.score}</span>
                  <span className="text-white/20">-</span>
                  <span>{match.awayTeam.score}</span>
                </div>
                <div className="text-white/60 text-sm font-medium uppercase tracking-widest">Full Time</div>
              </div>

              {/* Away Team */}
              <div className="flex flex-col items-center gap-4 flex-1 text-center">
                <div className="relative w-24 h-24 md:w-32 md:h-32 bg-white/5 rounded-full p-4 backdrop-blur-sm border border-white/10 shadow-2xl">
                  <img src={match.awayTeam.logo} alt={match.awayTeam.name} className="w-full h-full object-contain" />
                </div>
                <h2 className="text-xl md:text-3xl font-bold tracking-tight">{match.awayTeam.name}</h2>
              </div>
            </div>

            {/* Match Meta */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-white/60 text-sm md:text-base mt-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{match.date}</span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-white/20 rounded-full" />
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{match.venue}</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Column: Actions & Stats (4 cols) */}
          <div className="lg:col-span-4 space-y-6">

            {/* Action Card */}
            <Card className="border-0 shadow-xl overflow-hidden">
              <CardContent className="p-6 space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="font-semibold text-lg">Watched this match?</h3>
                  <p className="text-muted-foreground text-sm">Log it to your diary and share your thoughts.</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button className="w-full" size="lg">
                    <Eye className="w-4 h-4 mr-2" />
                    Log
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <Star className="w-4 h-4 mr-2" />
                    Rate
                  </Button>
                </div>

                <Separator />

                <div className="flex items-center justify-center gap-1 text-amber-400">
                  <Star className="w-8 h-8 fill-current" />
                  <Star className="w-8 h-8 fill-current" />
                  <Star className="w-8 h-8 fill-current" />
                  <Star className="w-8 h-8 fill-current" />
                  <Star className="w-8 h-8 text-muted/20" />
                </div>
                <div className="text-center text-xs text-muted-foreground font-medium uppercase tracking-wider">Average Rating: 4.0</div>
              </CardContent>
            </Card>

            {/* Match Stats Mini */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Match Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <StatRow label="Possession" home={match.stats.possession[0]} away={match.stats.possession[1]} unit="%" />
                <StatRow label="Shots" home={match.stats.shots[0]} away={match.stats.shots[1]} />
                <StatRow label="On Target" home={match.stats.shotsOnTarget[0]} away={match.stats.shotsOnTarget[1]} />
                <StatRow label="Corners" home={match.stats.corners[0]} away={match.stats.corners[1]} />
              </CardContent>
            </Card>

          </div>

          {/* Right Column: Details & Reviews (8 cols) */}
          <div className="lg:col-span-8 space-y-6">

            <Tabs defaultValue="lineups" className="w-full">
              <TabsList className="w-full justify-start h-12 bg-transparent border-b rounded-none p-0 space-x-6">
                <TabsTrigger value="lineups" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-3 text-base">Lineups</TabsTrigger>
                <TabsTrigger value="reviews" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-3 text-base">Reviews</TabsTrigger>
                <TabsTrigger value="discussion" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-3 text-base">Discussion</TabsTrigger>
              </TabsList>

              <TabsContent value="lineups" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={match.homeTeam.logo} />
                            <AvatarFallback>H</AvatarFallback>
                          </Avatar>
                          <h4 className="font-bold">{match.homeTeam.name}</h4>
                        </div>
                        <ul className="space-y-2">
                          {match.lineups.home.map((player, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm p-2 hover:bg-muted/50 rounded-md transition-colors">
                              <span className="text-muted-foreground w-4 text-right font-mono text-xs">{i + 1}</span>
                              {player}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={match.awayTeam.logo} />
                            <AvatarFallback>A</AvatarFallback>
                          </Avatar>
                          <h4 className="font-bold">{match.awayTeam.name}</h4>
                        </div>
                        <ul className="space-y-2">
                          {match.lineups.away.map((player, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm p-2 hover:bg-muted/50 rounded-md transition-colors">
                              <span className="text-muted-foreground w-4 text-right font-mono text-xs">{i + 1}</span>
                              {player}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6 space-y-4">
                {/* Review Input Placeholder */}
                <Card className="bg-muted/30 border-dashed">
                  <CardContent className="p-6 flex flex-col items-center justify-center text-center space-y-4">
                    <MessageCircle className="w-10 h-10 text-muted-foreground/50" />
                    <div className="space-y-1">
                      <h4 className="font-semibold">No reviews yet</h4>
                      <p className="text-sm text-muted-foreground">Be the first to share your thoughts on this match!</p>
                    </div>
                    <Button variant="secondary">Write a Review</Button>
                  </CardContent>
                </Card>

                {/* Mock Review */}
                <Card>
                  <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                    <Avatar>
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-sm">John Doe</h4>
                        <span className="text-xs text-muted-foreground">2 hours ago</span>
                      </div>
                      <div className="flex items-center gap-1 text-amber-400 mt-1">
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed">
                      What a game! The intensity from the first minute was incredible.
                      Vinicius was absolutely unplayable today. That second goal was pure magic.
                      Barca looked lost in the midfield without Pedri.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

          </div>
        </div>
      </div>
    </div>
  );
}

function StatRow({ label, home, away, unit = "" }: { label: string; home: number; away: number; unit?: string }) {
  const total = home + away;
  const homePercentage = total > 0 ? (home / total) * 100 : 50;

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-xs font-medium">
        <span>{home}{unit}</span>
        <span className="text-muted-foreground">{label}</span>
        <span>{away}{unit}</span>
      </div>
      <div className="flex h-2 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full bg-primary transition-all"
          style={{ width: `${homePercentage}%` }}
        />
      </div>
    </div>
  );
}

