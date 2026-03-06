import { Component } from '../core/heropy'
import movieStore, { getMovieDetails } from '../store/movie'

const POSTER_SIZE_SMALL = 'SX300'
const POSTER_SIZE_LARGE = 'SX700'

export default class Movie extends Component {
  async render() {
    this.el.classList.add('container', 'the-movie')
    this.el.innerHTML = /* html */ `
      <div class="poster skeleton"></div>
      <div class="specs">
        <div class="title skeleton"></div>
        <div class="labels skeleton"></div>
        <div class="plot skeleton"></div>
      </div>
    `
    await getMovieDetails(history.state.id)
    const { movie } = movieStore.state
    const bigPoster = movie.Poster.replace(POSTER_SIZE_SMALL, POSTER_SIZE_LARGE)

    this.el.innerHTML = /* html */ `
      <div
        style="background-image: url(${bigPoster});"
        class="poster">
      </div>
      ${this._renderSpecs(movie)}
    `
  }

  _renderSpecs(movie) {
    return /* html */ `
      <div class="specs">
        <div class="title">${movie.Title}</div>
        <div class="labels">
          <span>${movie.Released}</span>
          &nbsp;/&nbsp;
          <span>${movie.Runtime}</span>
          &nbsp;/&nbsp;
          <span>${movie.Country}</span>
        </div>
        <div class="plot">${movie.Plot}</div>
        ${this._renderSection('Ratings', this._renderRatings(movie.Ratings))}
        ${this._renderSection('Actors', `<p>${movie.Actors}</p>`)}
        ${this._renderSection('Director', `<p>${movie.Director}</p>`)}
        ${this._renderSection('Production', `<p>${movie.Production}</p>`)}
        ${this._renderSection('Genre', `<p>${movie.Genre}</p>`)}
      </div>
    `
  }

  _renderSection(title, content) {
    return /* html */ `
      <div>
        <h3>${title}</h3>
        ${content}
      </div>
    `
  }

  _renderRatings(ratings) {
    return ratings.map(({ Source, Value }) => `<p>${Source} - ${Value}</p>`).join('')
  }
}
