## About me
Hi I'm Chris, I have had a passion for technology ever since I was a kid playing on my _**Game Boy**_ 🎮

Since then I've learnt a lot, from hosting my own static site with HTML/CSS/JavaScript, to learning Java & C# whilst making apps during Lockdown.

ALL IN provides a consumer App to meet the needs of people organising activities and managing finances with friends, and is available on iOS, Android, and Web by virtue of being a hybrid App.

Working at ALL IN has been a great opportunity, one of the reasons being a chance to learn Angular and Firebase as I work in a fast-paced start-up enviroment, which has let me really push my ability to problem-solve, self-teach, and think outside the box.

### Technologies:
- React & Angular
- MySQL & MongoDB
- Firebase & Node.js
- Java & C#

## Experience
*Junior Programmer* @ **ALL IN**

<sup>FEBRUARY 2022 - PRESENT</sup>
- Created App features using Angular that connect to a Firebase server, and perform CRUD operations using that server's database
- Ensured dynamic styling throughout the whole App so as to provide a user-friendly interface across mobile, tablet, and web
- Worked with an Agile team learning and using new technologies such as Google BigQuery, Angular, Ionic, and Firebase, giving daily updates on progress

<br>

*Digital Archive Assistant* @ **Medway Council**

<sup>APRIL 2021 - OCTOBER 2021</sup>
- Digitised archive material, and embedded data into those digital copies
- Ensured both originals and their digital copies were handled, secured, and registered correctly
- Independently brought forward new streamlined workflows that saved time and reduced errors

<br>

*Fraud Investigator* @ **Vanquis Bank**

<sup>JANUARY 2020 - MARCH 2020</sup>
- Manipulated databases with MySQL to check for patterns of fraud
- Documented findings using inhouse language, to effectively communicate across teams

## Projects
Some of my favourite projects, more available on my [GitHub](https://github.com/ChrisLilleyDev)

### C# A* algorithm pathfinding <sup><a href="https://github.com/ChrisLilleyDev/C-Sharp-Pathfinding" target="_blank">GitHub Repo</a></sup>
The core of this project is an implementation of the A* algorithm, used to find the shortest path if one is available.<br>
Built with Unity, this project is a small game that allows the user to take turns moving and attacking units, all while being able to customise the terrain.<br>
Below is an extract of the code containing the main part of the algorithm:

```csharp

private List<Tile> MakePath(Tile destination) {
    PathNode[,] grid = new PathNode[destination.grid.width, destination.grid.height];
    for(int x = 0; x < destination.grid.width; x++) {
        for(int y = 0; y < destination.grid.height; y++) {
            grid[x, y] = new PathNode(destination.grid.gridArray[x, y]);
        }//2D array of nodes is initialised
    }
    Tile startTile = selectedUnit.tile;
    PathNode startNode = grid[startTile.xPos, startTile.yPos];
    PathNode endNode = grid[destination.xPos, destination.yPos];
    if(!endNode.walkable) return null;

    List<PathNode> openList = new List<PathNode> { startNode };
    HashSet<PathNode> closedList = new HashSet<PathNode>();
    //HashSet is used to save time searching
    startNode.g = 0; //cost to get to the node from the start node
    startNode.h = Distance(startNode, endNode); //estimated distance from the end node
    startNode.f = startNode.h; //cost of node f = g + h
    //with lists and start node values initialised the algorithm can begin
    while(openList.Count > 0) {
        PathNode currentNode = openList[0];
        for(int i = 1; i < openList.Count; i++) {
            if(openList[i].f < currentNode.f || openList[i].f == currentNode.f && openList[i].h < currentNode.h) {
                currentNode = openList[i];
            }//searching for a cheaper node, or one of the same value that is closer to the end
        }
        if(currentNode == endNode) {
            return Path(endNode);
        }
        openList.Remove(currentNode);
        closedList.Add(currentNode);

        foreach(PathNode neighbour in Neighbours(grid, currentNode)) {
            if(!neighbour.walkable || closedList.Contains(neighbour)) continue;
            int testG = currentNode.g + Distance(currentNode, neighbour);
            if(testG < neighbour.g && testG <= 10 * selectedUnit.moveRange) {
            //checks if new g is better than neighbours current g
            //and that current path is within the units movement range
                neighbour.parent = currentNode;
                neighbour.g = testG;
                neighbour.h = Distance(neighbour, endNode);
                neighbour.f = neighbour.g + neighbour.h;
                if(!openList.Contains(neighbour)) openList.Add(neighbour);
            }
        }
    }
    return null;
}

```

*To be added*:
- React MongoDB Atlas web App

## Contact
[visit my GitHub](https://github.com/ChrisLilleyDev)

[Connect with me on LinkedIn](https://www.linkedin.com/in/chris-lilley-dev)

[Send me an email](mailto:chris.lilley.dev@gmail.com)
