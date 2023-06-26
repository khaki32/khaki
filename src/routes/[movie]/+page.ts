export const load = ({ params }) => {
  return {
    movie: params.movie,
    movieTitle: toTitleCase(params.movie.replaceAll("-", " ")),
  };
};

function toTitleCase(str: string) {
  return str.replace(/\w\S*/g, function (txt: string) {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
}
