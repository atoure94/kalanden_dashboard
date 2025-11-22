import { useState } from 'react'
import { LoginPage } from './components/loginPage'
import { SignupPage } from './components/signupPage'
import './App.css'
import { Sidebar } from './components/Sidebar';

// Type pour toutes les pages possibles
type PageType = "login" | "signup" | "dashboard" | "students" | "teachers" | "courses" | "calendar" | "analytics" | "notifications" | "settings";

// Pages d'exemple
function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <p className="text-gray-600">Bienvenue sur le Dashboard</p>
      </div>
    </div>
  );
}

function StudentsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Étudiants</h1>
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <p className="text-gray-600">Liste des étudiants</p>
      </div>
    </div>
  );
}

function TeachersPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Enseignants</h1>
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <p className="text-gray-600">Liste des enseignants</p>
      </div>
    </div>
  );
}

function CoursesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Cours</h1>
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <p className="text-gray-600">Liste des cours</p>
      </div>
    </div>
  );
}

function CalendarPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Calendrier</h1>
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <p className="text-gray-600">Calendrier académique</p>
      </div>
    </div>
  );
}

function AnalyticsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Analytics</h1>
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <p className="text-gray-600">Statistiques et analyses</p>
      </div>
    </div>
  );
}

function NotificationsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Notifications</h1>
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <p className="text-gray-600">Centre de notifications</p>
      </div>
    </div>
  );
}

function SettingsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Paramètres</h1>
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <p className="text-gray-600">Configuration de l'application</p>
      </div>
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("login");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage("dashboard");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage("login");
  };

  // Navigation depuis le Sidebar
  const handleNavigate = (path: string, pageId: string) => {
    setCurrentPage(pageId as PageType);
    console.log(`Navigation vers: ${path}`);
  };

  // Affichage des pages d'authentification
  if (currentPage === "login") {
    return <LoginPage onLogin={handleLogin} onSwitchToSignup={() => setCurrentPage("signup")} />;
  }

  if (currentPage === "signup") {
    return <SignupPage onSignup={handleLogin} onSwitchToLogin={() => setCurrentPage("login")} />;
  }

  // Layout principal avec Sidebar (après authentification)
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar onNavigate={handleNavigate} />
      
      <main className="lg:ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          {currentPage === "dashboard" && <DashboardPage />}
          {currentPage === "students" && <StudentsPage />}
          {currentPage === "teachers" && <TeachersPage />}
          {currentPage === "courses" && <CoursesPage />}
          {currentPage === "calendar" && <CalendarPage />}
          {currentPage === "analytics" && <AnalyticsPage />}
          {currentPage === "notifications" && <NotificationsPage />}
          {currentPage === "settings" && <SettingsPage />}
        </div>
      </main>
    </div>
  );
}

export default App