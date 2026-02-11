const PhotoShowcase = ({ image }) => {
  return (
    <div className="relative w-full h-[500px] group">
      
      {/* Glow Background Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-500 
                      rounded-2xl blur-2xl opacity-30 group-hover:opacity-60 
                      transition duration-700"></div>

      {/* Image Container */}
      <div className="relative w-full h-full overflow-hidden rounded-2xl">
        <img
          src={image}
          alt="Showcase"
          className="w-full h-full object-cover 
                     transition-transform duration-700 
                     group-hover:scale-105"
        />
      </div>
    </div>
  );
};

export default PhotoShowcase;
