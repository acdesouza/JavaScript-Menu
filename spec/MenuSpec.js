describe("Menu", function() {
	it("should be able to show root menu", function() {
		linesFromTable = [
			{
				"id": 1,
				"name": "Sports",
				"parent_id": null
			},
			{
				"id": 2,
				"name": "Health and Care",
				"parent_id": null
			}
		];

		var menu = new Menu('root');
		for(var i=0; i < linesFromTable.length; i++) {
			menu.add(linesFromTable[i]);
		}

		generated_menu = menu.toJSON();

		expected_menu = [
			{
				"id": 1,
				"name": "Sports"
			},
			{
				"id": 2,
				"name": "Health and Care"
			}
		];

		console.log(generated_menu);
		expect(generated_menu).toEqual(expected_menu);
	});
});
