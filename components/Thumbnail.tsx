import Image from 'next/image'
import React from 'react'
import { baseUrl } from '../constants/movie'
import { Movie } from '../typings'

interface Props {
	movie: Movie
}

function Thumbnail({ movie }: Props) {
	return (
		<div className="relative h-28">
			<Image
				src={`https://image.tmdb.org/t/p/w500${
					movie.backdrop_path || movie.poster_path
				}`}
				className="rounded-sm object-cover md:rounded"
				layout="fill"
			/>
		</div>
	)
}

export default Thumbnail
