import Movie from "./movie"
export default async function Home() {
  const data= await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`,{next: {revalidate:60}})
  const res=await data.json()
  return (
    <main>
      <div className="grid grid-cols-fluid gap-16">
      {res.results && res.results.map((movie)=>(
        <div>
          <Movie 
          key={movie.id}
          id={movie.id}
          title={movie.title}
          release_date={movie.release_date}
          poster_path={movie.poster_path}

          />
        </div>
      ))}
    </div>
    </main>
  )
}
