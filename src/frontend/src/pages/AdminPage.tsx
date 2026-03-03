import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import {
  Eye,
  EyeOff,
  GraduationCap,
  Loader2,
  Lock,
  LogOut,
  RefreshCw,
  ShieldCheck,
  Users,
} from "lucide-react";
import { useState } from "react";
import { useActor } from "../hooks/useActor";

const ADMIN_PASSWORD = "ExcellentAdmin2025";

function formatDate(timestampNs: bigint): string {
  // timestamp is in nanoseconds since epoch
  const ms = Number(timestampNs / BigInt(1_000_000));
  if (ms === 0) return "—";
  const date = new Date(ms);
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setError(null);
      onUnlock();
    } else {
      setError("Incorrect password. Please try again.");
      setPassword("");
    }
  };

  return (
    <div className="page-enter min-h-[80vh] flex items-center justify-center px-4">
      <div className="relative overflow-hidden bg-white rounded-3xl shadow-2xl p-8 sm:p-10 max-w-sm w-full border border-border">
        {/* Decorative blobs */}
        <div
          className="holi-blob absolute w-36 h-36 top-[-1.5rem] right-[-1.5rem]"
          style={{ background: "oklch(0.55 0.22 300)", opacity: 0.1 }}
        />
        <div
          className="holi-blob absolute w-28 h-28 bottom-[-1rem] left-[-1rem]"
          style={{ background: "oklch(0.58 0.24 340)", opacity: 0.1 }}
        />

        <div className="relative z-10">
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl holi-gradient-hero flex items-center justify-center mx-auto mb-6 shadow-lg">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>

          <h1 className="font-display font-extrabold text-2xl text-foreground text-center mb-1">
            Admin Access
          </h1>
          <p className="text-muted-foreground text-sm text-center mb-6 font-body">
            Enter the admin password to view registrations
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <Label
                htmlFor="admin-password"
                className="font-semibold text-foreground"
              >
                Password
              </Label>
              <div className="relative">
                <Input
                  id="admin-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) setError(null);
                  }}
                  className={`rounded-xl border-2 pr-10 ${
                    error ? "border-destructive" : "focus:border-holi-pink"
                  }`}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
              {error && (
                <p className="text-destructive text-xs font-body">⚠️ {error}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full holi-gradient-hero text-white font-display font-bold rounded-xl py-5 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Lock className="mr-2 w-4 h-4" />
              Unlock Dashboard
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

interface AdminDashboardProps {
  onLock: () => void;
}

function AdminDashboard({ onLock }: AdminDashboardProps) {
  const { actor, isFetching } = useActor();

  const {
    data: students,
    isLoading: studentsLoading,
    isError: studentsError,
    refetch,
    isFetching: isRefetching,
  } = useQuery({
    queryKey: ["admin-students"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllStudents();
    },
    enabled: !!actor && !isFetching,
    staleTime: 30_000,
  });

  const { data: totalCount } = useQuery({
    queryKey: ["admin-total-count"],
    queryFn: async () => {
      if (!actor) return BigInt(0);
      return actor.getTotalCount();
    },
    enabled: !!actor && !isFetching,
    staleTime: 30_000,
  });

  const genderStats = (() => {
    if (!students) return { Male: 0, Female: 0, Other: 0 };
    return students.reduce(
      (acc, s) => {
        const g = s.gender as "Male" | "Female" | "Other";
        acc[g] = (acc[g] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );
  })();

  return (
    <div className="page-enter py-8 px-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-holi-pink/10 rounded-full px-4 py-1.5 mb-3">
              <ShieldCheck className="w-4 h-4 holi-text-pink" />
              <span className="text-holi-pink font-semibold text-sm">
                Admin Dashboard
              </span>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground">
              Student <span className="holi-text-pink">Registrations</span>
            </h1>
            <p className="text-muted-foreground font-body text-sm mt-1">
              Excellent Education Classes — all enrolled students
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => refetch()}
              disabled={isRefetching || studentsLoading}
              className="rounded-xl border-2 font-semibold"
            >
              <RefreshCw
                className={`mr-1.5 w-4 h-4 ${isRefetching ? "animate-spin" : ""}`}
              />
              Refresh
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onLock}
              className="rounded-xl border-2 font-semibold text-destructive border-destructive/20 hover:bg-destructive/5"
            >
              <LogOut className="mr-1.5 w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="holi-gradient-card-pink rounded-2xl p-4 border border-border shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 holi-text-pink" />
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Total
              </span>
            </div>
            <p className="font-display font-extrabold text-3xl holi-text-pink">
              {totalCount !== undefined
                ? Number(totalCount)
                : (students?.length ?? "—")}
            </p>
            <p className="text-xs text-muted-foreground font-body mt-0.5">
              Registrations
            </p>
          </div>

          <div className="holi-gradient-card-blue rounded-2xl p-4 border border-border shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-base">👨‍🎓</span>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Male
              </span>
            </div>
            <p className="font-display font-extrabold text-3xl holi-text-blue">
              {genderStats.Male ?? 0}
            </p>
            <p className="text-xs text-muted-foreground font-body mt-0.5">
              Students
            </p>
          </div>

          <div className="holi-gradient-card-orange rounded-2xl p-4 border border-border shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-base">👩‍🎓</span>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Female
              </span>
            </div>
            <p className="font-display font-extrabold text-3xl holi-text-orange">
              {genderStats.Female ?? 0}
            </p>
            <p className="text-xs text-muted-foreground font-body mt-0.5">
              Students
            </p>
          </div>

          <div className="holi-gradient-card-green rounded-2xl p-4 border border-border shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5 holi-text-green" />
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Grad
              </span>
            </div>
            <p className="font-display font-extrabold text-3xl holi-text-green">
              {students?.filter((s) => s.classLevel === "Graduation").length ??
                0}
            </p>
            <p className="text-xs text-muted-foreground font-body mt-0.5">
              Grad-level
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-md border border-border overflow-hidden">
          <div className="px-6 py-4 border-b border-border flex items-center justify-between">
            <h2 className="font-display font-bold text-lg text-foreground">
              All Students
            </h2>
            {students && (
              <Badge
                variant="secondary"
                className="rounded-full font-semibold bg-holi-pink/10 holi-text-pink border-0"
              >
                {students.length} {students.length === 1 ? "record" : "records"}
              </Badge>
            )}
          </div>

          {/* Loading state */}
          {(studentsLoading || (isFetching && !actor)) && (
            <div className="flex items-center justify-center gap-3 py-16 text-muted-foreground font-body">
              <Loader2 className="w-5 h-5 animate-spin holi-text-pink" />
              <span>Loading registrations...</span>
            </div>
          )}

          {/* Error state */}
          {studentsError && !studentsLoading && (
            <div className="flex flex-col items-center gap-3 py-16 text-center px-4">
              <p className="text-destructive font-body text-sm">
                Failed to load students. Please refresh and try again.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => refetch()}
                className="rounded-xl border-2"
              >
                <RefreshCw className="mr-1.5 w-4 h-4" />
                Try Again
              </Button>
            </div>
          )}

          {/* Empty state */}
          {!studentsLoading &&
            !studentsError &&
            students &&
            students.length === 0 && (
              <div className="flex flex-col items-center gap-3 py-16 text-center px-4">
                <div className="text-4xl mb-2">📋</div>
                <p className="font-display font-bold text-lg text-foreground">
                  No registrations yet
                </p>
                <p className="text-muted-foreground text-sm font-body">
                  Students who register will appear here.
                </p>
              </div>
            )}

          {/* Table with horizontal scroll on mobile */}
          {!studentsLoading &&
            !studentsError &&
            students &&
            students.length > 0 && (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/40 hover:bg-muted/40">
                      <TableHead className="font-display font-bold text-foreground w-12 text-center">
                        #
                      </TableHead>
                      <TableHead className="font-display font-bold text-foreground min-w-[140px]">
                        Name
                      </TableHead>
                      <TableHead className="font-display font-bold text-foreground min-w-[180px]">
                        Email
                      </TableHead>
                      <TableHead className="font-display font-bold text-foreground min-w-[120px]">
                        Mobile
                      </TableHead>
                      <TableHead className="font-display font-bold text-foreground min-w-[90px]">
                        Gender
                      </TableHead>
                      <TableHead className="font-display font-bold text-foreground min-w-[180px]">
                        School
                      </TableHead>
                      <TableHead className="font-display font-bold text-foreground min-w-[110px]">
                        Class
                      </TableHead>
                      <TableHead className="font-display font-bold text-foreground min-w-[160px]">
                        Registered On
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {students.map((student, idx) => (
                      <TableRow
                        key={String(student.id)}
                        className="hover:bg-holi-pink/5 transition-colors"
                      >
                        <TableCell className="text-center text-muted-foreground font-body text-sm font-semibold">
                          {idx + 1}
                        </TableCell>
                        <TableCell className="font-body font-semibold text-foreground">
                          {student.name}
                        </TableCell>
                        <TableCell className="font-body text-sm text-muted-foreground">
                          {student.email}
                        </TableCell>
                        <TableCell className="font-body text-sm text-foreground">
                          {student.mobile}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={`rounded-full text-xs font-semibold border ${
                              student.gender === "Male"
                                ? "border-blue-200 bg-blue-50 holi-text-blue"
                                : student.gender === "Female"
                                  ? "border-pink-200 bg-pink-50 holi-text-pink"
                                  : "border-green-200 bg-green-50 holi-text-green"
                            }`}
                          >
                            {student.gender}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-body text-sm text-foreground max-w-[200px] truncate">
                          {student.school}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="secondary"
                            className="rounded-full bg-holi-purple/10 holi-text-purple border-0 font-semibold text-xs"
                          >
                            {student.classLevel}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-body text-xs text-muted-foreground whitespace-nowrap">
                          {formatDate(student.timestamp)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default function AdminPage() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  if (!isUnlocked) {
    return <PasswordGate onUnlock={() => setIsUnlocked(true)} />;
  }

  return <AdminDashboard onLock={() => setIsUnlocked(false)} />;
}
