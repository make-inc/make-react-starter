import React from "react";

/**
 * This is the home page component.
 *
 * NOTE: This is boilerplate code for the home page. Please replace it with the actual home page.
 */
const HomePage: React.FC = () => {
  return (
    <div className="flex items-center justify-items-center min-h-[90vh] max-w-2xl mx-auto">
      <main className="flex flex-col gap-[32px] items-center sm:items-start">
        <div className="flex items-center gap-3">
          <div className="bg-primary w-12 h-12 rounded-lg flex items-center justify-center text-primary-foreground font-bold text-2xl">
            M
          </div>
          <h1 className="text-3xl font-bold text-foreground">make.inc</h1>
        </div>

        <div className="max-w-xl">
          <h2 className="text-xl font-semibold mb-4">
            This is a starter template.
          </h2>
          <p className="text-muted-foreground mb-6">
            Your AI agent is working and you should see changes soon.
          </p>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
