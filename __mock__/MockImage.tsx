const MockNextImage = ({ src, alt, width, height, className }: any) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default MockNextImage;
