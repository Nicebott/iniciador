import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../lib/firebase';
import { LogOut, User } from 'lucide-react';

export function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-purple-600 to-blue-600">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <User className="w-8 h-8 text-purple-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  ¡Bienvenido!
                </h1>
                <p className="text-gray-600">
                  {auth.currentUser?.email}
                </p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Cerrar sesión
            </button>
          </div>
          <div className="bg-purple-50 rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-purple-900 mb-2">
              ¡Has iniciado sesión correctamente!
            </h2>
            <p className="text-purple-700">
              Tu cuenta ha sido verificada y ahora tienes acceso completo a la plataforma.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}