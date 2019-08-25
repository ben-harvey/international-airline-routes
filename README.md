
<!-- Optional: Push your code to a Heroku application
Create the heroku app
Add a custom buildpack as shown below
Push your code to Heroku to deploy
$ heroku create
$ heroku buildpacks:set https://github.com/mars/create-react-app-buildpack.git
$ git push heroku master
 -->
Step 2: Display Raw Data
Require the data.js file within App.js
Display the raw values (airline, src, and dest) of the objects in the routes array from data.js in a table.

Step 3: Humanize Values in Table
Add getAirlineById(id) and getAirportByCode(code) functions to data.js
Import the new functions in App.js and use them to display human friendly values in the table
airline name instead of airline id
airport name instead of airport code

Step 4: Extract a Table Component
Move table code into a new Table component that can be used in App.js as shown in the code example below.
The format prop should be passed a function that has the interface shown below.
Update App.js to import and use the new component
function formatValue(property, value) { // return a string }

const columns = [
  {name: 'Airline', property: 'airline'},
  {name: 'Source Airport', property: 'src'},
  {name: 'Destination Airport', property: 'dest'},
];

...

<Table className="routes-table" columns={columns} rows="" format="" />

Step 5: Add Pagination to Table
Update the Table component so that only 25 rows are shown at a time
Display a message that says Showing n - n+25 routes of x total routes
Display Previous Page and Next Page buttons
Adjust the page shown when the buttons are clicked
Disable the paging controls to prevent a user from going outside valid bounds
Allow the number of rows per page to be specified as a perPage prop

Step 6: Filter Routes by Airline
Add a Select box that filters the data in the table by airline

Step 7: Extract Select Component
Move select code into a new Select component that can be used in App.js as shown in the code example below.
Update App.js to import and use the new component
<Select options={filteredAirlines} valueKey="id" titleKey="name"
  allTitle="All Airlines" value="" onSelect="" />

Step 8: Filter Routes by Airport
Add a second select that filters routes by airport using the Select component

Step 9: Clear Filter Button
Add a Clear Filters button that clears any filters that have been set

Step 10: Disable Empty Options
Disable options within both selects that have no matching routes based on the values of the other select. See the deployed version for an example of how this should work.
Step 11: Add a Map (OPTIONAL)
Add a new Map component that renders routes using an SVG map. Use the JSX code below as the basis of your map. Don't worry about understanding everything that is happening in the SVG code; specifically, there are a few hacks for browser compatibility and to make it easier to work with raw latitudes and longitudes.

Remember that SVG code is also a DOM that can be returned from a React component, just like HTML (there are a few complications, but don't worry about them for now).
<svg className="map" viewBox="-180 -90 360 180">
  <g transform="scale(1 -1)">
    <image xlinkHref="equirectangular_world.jpg" href="equirectangular_world.jpg" x="-180" y="-90" height="100%" width="100%" transform="scale(1 -1)"/>

    {/* for each route */}
    <g key="">
      <circle className="source" cx={x1} cy={y1}>
        <title></title>
      </circle>
      <circle className="destination" cx={x1} cy={y1}>
        <title></title>
      </circle>
      <path d={`M${x1} ${y1} L ${x2} ${y2}`} />
    </g>
    {/* end route */}

  </g>
</svg>

Future Ideas
If you finish all of the above and are looking for more to do on this project, try making the following changes:
Allow the user to click on an airport in the map to filter by that airport (onClick works with elements within SVG just like it does for those within basic HTML).
Sort the airports within the Select by name or number of routes.
Display the number of matching routes within the airport and airline selects.
Separate the Table component onto two new components: TableContainer (which will be a Container) and Table (which will be a stateless functional component). To do this, move all data access and state into TableContainer and have Table just render out the table using these values.

This is an advanced technique that is covered in the video series on redux, so don't worry if the rationale behind this change isn't totally clear to you.