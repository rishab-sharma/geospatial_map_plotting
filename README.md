# geospatial_map_plotting
MAP PLOTTING USING GEOSPATIAL DATABASE is 2 way project in which a geospatial database can be plotted on a map depicting the various polygons which refer to the lease area of a company along with the point data depicting the wells and boreholes.The geospatial data consists of shape files (contains the array of lat-long points of lease polygon)  and the well lat-long in degree.The map plotting is done using Interactive python and its libraries ( matplotlib , basemap , _proj4(for degree to cartesian conversion) , pyplot , mpl_toolkits). The other way is collecting geospatial data by manual map marking. In this method we use google map api in javascript and connect it to a PostgreSQL using SQLAlchemy and a Python microframework of Jinja2 (Flask).The “OnClick” events on the map surface are handled by the JS code and responses are stored in the PostgreSQL database , thus enabling the creation of a geospatial database with lat-long points which refer to the earlier mentioned parameter of boreholes attributes.Thus we have developed a 2-way approach to interact with a geospatial database enabling both its creation and its visualisation.

How to use the files:
1) The Database_postgreSQL directory contains the database creation , data modelling and data entry and display endpoints.
2) The front end+manual_map_marking directory contains the web app front end along with area plotting , bore_well plotting and geocoding tools attached.
3) The shape_file_plotting directory contains python files to plot a shape file and superimpose it with other data layers.

For manual_map_plotting-> GO to front end -> index.html
For shape_file plotting-> Go to shape_file_plotting -> Run the python files in a Ipython IDLE (Spyder) , with dependencies such as (basemap ,matplotlib ,pyplot ,proj4)
