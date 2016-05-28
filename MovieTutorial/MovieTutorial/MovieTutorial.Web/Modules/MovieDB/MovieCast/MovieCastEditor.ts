/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace MovieTutorial.MovieDB {
    @Serenity.Decorators.registerEditor()
    export class MovieCastEditor extends Common.GridEditorBase<MovieCastRow> {
        protected getColumnsKey() { return "MovieDB.MovieCast"; }
        protected getLocalTextPrefix() { return MovieCastRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}