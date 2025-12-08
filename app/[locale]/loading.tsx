export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-paper-bg to-white flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo Loader */}
        <div className="relative w-32 h-32 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-champagne-gold/30 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-champagne-gold rounded-full animate-spin"></div>
          <div className="absolute inset-4 border-4 border-champagne-gold/20 rounded-full"></div>
          <div className="absolute inset-4 border-4 border-transparent border-t-primary rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-deep-brown tracking-wider">
            LIVBOSS
          </h2>
          <p className="text-sm text-deep-brown/60 tracking-widest uppercase">
            Loading...
          </p>
        </div>
      </div>
    </div>
  );
}
