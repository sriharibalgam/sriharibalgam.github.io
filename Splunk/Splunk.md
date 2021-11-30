
#### Splunk Components - Functions

-   Index Data - Heart of Splunk - Inspector inspects the data and labels it - braeks into single events - adds timestamp -- stores in splunk index
-   Search & Investigate -- Access_combined -- search 
-   Add knowledge       -- gives classification to log data
-   Moniter & Alert     -- Monitors issues and alerts
-   Report & Analyze    -- Visual reports

Splunk 
-   indexer  -- Process Data and stored in splunk index -- indexer stores data based on age folder
-   searchead   -- Handles search request -- consolidate and enrich the result from indexer - searchtype=access_combined action=purchase status=200
- Forwarders   -- consumes data and forward to indexer -- Most of the deployments Forwarder serve as the Primary way is supplied for indexing.


#### Deploying and Scaling Splunk
-   Single Instance Deployment
    - Input
    - Parsing
    - Indexing
    - Searching

#### Roles in Splunk
-   Admin   - Install apps, create knowledge objects for all users
-   Power   - Can create share knowledge objects for users of an app and do realtime searches
-   User    - Only see knowledge objectes shared with them

Apps
Search & Reporting

#### Types of Input in Splunk
-   


Using fields in Search
    - field names are case-sensitive wher Values are not 

##### Best Practices
    index, source, host, searchtypes --- are heros in search
    Apply Filter early
    Use Timestamps for search --@ - round down the value -- earliest --startdate  -- latest -- endtime

##### Splunk Search Language
-   Search Terms
-   Commands
-   Functions
-   Arguments
-   Clause


##### Transforming Commands
-   Top - 
        - by clause
-   Rare -
-   Stats
    -  Count
    -  DC
-   

#### Datasets

#### Lookups
    - .csv files, Geospecial lookup
    - Define Lookup table then Define lookup 
    -- Case Sensitive lookup values
    Setting->Lookup->
