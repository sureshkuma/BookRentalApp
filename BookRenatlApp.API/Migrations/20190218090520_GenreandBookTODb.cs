using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BookRentalApp.API.Migrations
{
    public partial class GenreandBookTODb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "geners",
                columns: table => new
                {
                    GenreId = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    GenreName = table.Column<string>(nullable: true),
                    BookId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_geners", x => x.GenreId);
                });

            migrationBuilder.CreateTable(
                name: "books",
                columns: table => new
                {
                    BookId = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    GenreId = table.Column<int>(nullable: true),
                    BookName = table.Column<string>(nullable: true),
                    ImageUrl = table.Column<string>(nullable: true),
                    Descripation = table.Column<string>(nullable: true),
                    cost = table.Column<int>(nullable: false),
                    Title = table.Column<string>(nullable: true),
                    Pages = table.Column<int>(nullable: false),
                    Author = table.Column<string>(nullable: true),
                    Publisher = table.Column<string>(nullable: true),
                    PublicationDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_books", x => x.BookId);
                    table.ForeignKey(
                        name: "FK_books_geners_GenreId",
                        column: x => x.GenreId,
                        principalTable: "geners",
                        principalColumn: "GenreId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_books_GenreId",
                table: "books",
                column: "GenreId");

            migrationBuilder.CreateIndex(
                name: "IX_geners_BookId",
                table: "geners",
                column: "BookId");

            migrationBuilder.AddForeignKey(
                name: "FK_geners_books_BookId",
                table: "geners",
                column: "BookId",
                principalTable: "books",
                principalColumn: "BookId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_books_geners_GenreId",
                table: "books");

            migrationBuilder.DropTable(
                name: "geners");

            migrationBuilder.DropTable(
                name: "books");
        }
    }
}
