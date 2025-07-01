// app/page.tsx (or pages/index.tsx if using Pages Router)
"use client"


export default function HomePage() {

  return (
    <div className="min-h-screen">
    
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-200 mb-4">
            Welcome to Your App!
          </h1>
          <p className="text-gray-600">
            The preloader has finished. Your content loads here.
          </p>
        
        </div>
      </div>
    
  </div>
  );
}
