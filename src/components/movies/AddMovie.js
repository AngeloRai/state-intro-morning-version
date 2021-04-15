import React from "react";

// Praticamente todo formulário precisa de state

class AddMovie extends React.Component {
  state = {
    title: "",
    director: "",
    hasOscars: false,
    IMDbRating: 0,
    genre: "",
    PGRating: "",
  };

  handleChange = (event) => {
    console.log(event.target.checked);

    this.setState({ [event.target.name]: event.target.valuee });
  };

  render() {
    console.log(this.state);
    return (
      <form>
        {/* Movie Title */}
        <div className="form-group">
          <label htmlFor="movieFormTitleField">Movie Title</label>
          <input
            type="text"
            className="form-control"
            id="movieFormTitleField"
            name="title" // O valor de 'name' precisa ser igual ao valor da propriedade do state que irá receber o valor desse input
            // essas duas configurações tornam esse input controlado
            onChange={this.handleChange} // função atualizado o state no evento change
            value={this.state.title} // forçar o atributo value do input para o state
          />
        </div>
        {/* Movie Director */}
        <div className="form-group">
          <label htmlFor="movieFormDirectorField">Movie Director</label>
          <input
            type="text"
            className="form-control"
            id="movieFormDirectorField"
            name="director"
            onChange={this.handleChange}
            value={this.state.director}
          />
        </div>
        {/* Movie has Oscars? */}
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="movieFormHasOscarsField"
            name="hasOscars"
            // Em inputs do tipo checkbox, precisamos atualizar o state com o valor de checked, que é o atributo que verifica se o input está 'ticado' ou não
            onChange={(event) => {
              this.setState({ [event.target.name]: event.target.checked });
            }}
            // E forçar esse atributo para o state, e não o value
            checked={this.state.hasOscars}
          />
          <label className="form-check-label" htmlFor="movieFormHasOscarsField">
            Does the movie have Oscars?
          </label>
        </div>
        {/* Movie IMDB Rating */}
        <div className="form-group">
          <label htmlFor="movieFormRatingField">Movie IMDB Rating</label>
          <input
            type="range"
            className="form-control custom-range"
            id="movieFormRatingField"
            name="IMDbRating"
            min={0}
            max={10}
            step={0.1}
            onChange={this.handleChange}
            value={this.state.IMDbRating}
          />
          <small>{this.state.IMDbRating}</small>
        </div>
        <div className="form-group">
          <label htmlFor="movieFormGenreField">Movie Genres</label>
          <select
            className="form-control"
            id="movieFormGenreField"
            name="genre"
            onChange={this.handleChange}
            value={this.state.genre}
          >
            <option>Drama</option>
            <option>Romance</option>
            <option>Comedy</option>
            <option>Adventure</option>
          </select>
        </div>
        <div className="form-group">
          <h5>Movie PG Rating</h5>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              id="movieFormPGRatingFieldG"
              name="PGRating"
              checked={this.state.PGRating === "G"}
              onChange={this.handleChange}
              value="G"
            />
            <label
              className="custom-control-label"
              htmlFor="movieFormPGRatingFieldG"
            >
              G
            </label>
          </div>

          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              id="movieFormPGRatingFieldPG"
              name="PGRating"
              checked={this.state.PGRating === "PG"}
              onChange={this.handleChange}
              value="PG"
            />
            <label
              className="custom-control-label"
              htmlFor="movieFormPGRatingFieldPG"
            >
              PG
            </label>
          </div>

          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              id="movieFormPGRatingFieldPG-13"
              name="PGRating"
              checked={this.state.PGRating === "PG-13"}
              onChange={this.handleChange}
              value="PG-13"
            />
            <label
              className="custom-control-label"
              htmlFor="movieFormPGRatingFieldPG-13"
            >
              PG-13
            </label>
          </div>

          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              id="movieFormPGRatingFieldR"
              name="PGRating"
              checked={this.state.PGRating === "R"}
              onChange={this.handleChange}
              value="R"
            />
            <label
              className="custom-control-label"
              htmlFor="movieFormPGRatingFieldR"
            >
              R
            </label>
          </div>

          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              id="movieFormPGRatingFieldNC-17"
              name="PGRating"
              checked={this.state.PGRating === "NC-17"}
              onChange={this.handleChange}
              value="NC-17"
            />
            <label
              className="custom-control-label"
              htmlFor="movieFormPGRatingFieldNC-17"
            >
              NC-17
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default AddMovie;
