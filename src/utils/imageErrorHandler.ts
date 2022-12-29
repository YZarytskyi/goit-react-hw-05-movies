export const handleImageError = (e: React.BaseSyntheticEvent) => {
  e.target.onerror = null;
  e.target.src = 'https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg';
};
