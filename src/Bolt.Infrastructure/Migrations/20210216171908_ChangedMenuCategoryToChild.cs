using Microsoft.EntityFrameworkCore.Migrations;

namespace Bolt.Infrastructure.Migrations
{
    public partial class ChangedMenuCategoryToChild : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MenuItem_Menu_MenuId",
                table: "MenuItem");

            migrationBuilder.DropForeignKey(
                name: "FK_MenuItem_MenuCategory_CategoryId",
                table: "MenuItem");

            migrationBuilder.DropIndex(
                name: "IX_MenuItem_MenuId",
                table: "MenuItem");

            migrationBuilder.DropColumn(
                name: "MenuId",
                table: "MenuItem");

            migrationBuilder.AlterColumn<int>(
                name: "CategoryId",
                table: "MenuItem",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_MenuItem_MenuCategory_CategoryId",
                table: "MenuItem",
                column: "CategoryId",
                principalTable: "MenuCategory",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MenuItem_MenuCategory_CategoryId",
                table: "MenuItem");

            migrationBuilder.AlterColumn<int>(
                name: "CategoryId",
                table: "MenuItem",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AddColumn<int>(
                name: "MenuId",
                table: "MenuItem",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_MenuItem_MenuId",
                table: "MenuItem",
                column: "MenuId");

            migrationBuilder.AddForeignKey(
                name: "FK_MenuItem_Menu_MenuId",
                table: "MenuItem",
                column: "MenuId",
                principalTable: "Menu",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MenuItem_MenuCategory_CategoryId",
                table: "MenuItem",
                column: "CategoryId",
                principalTable: "MenuCategory",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
