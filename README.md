
<!-- Optional: Push your code to a Heroku application
Create the heroku app
Add a custom buildpack as shown below
Push your code to Heroku to deploy
$ heroku create
$ heroku buildpacks:set https://github.com/mars/create-react-app-buildpack.git
$ git push heroku master
-->

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