# Procedure
A* Search algorithm is one of the best and popular techniques used in path-finding and graph traversals.It is a searching algorithm that is used to find the shortest path between an initial and a final point.
The A* Search Algorithm also uses a heuristic function that provides additional information regarding how far away from the goal node we are.

## Create the Graph and set the search parameters:
    Select creating graph manual/random
    Enter Source Node and Destination Node
    Initiate Search on Graph
## Generate solution:
    Visualize the steps 
    Visualize the path from selecting a starting point on the graph and then following a the heuristic function
    Iterations can be animated; paths can be highlighted.
    The result will be a path which displays the end of the search.

## Evaluate :
    Define following:	
    Path and algorithm iterations
## Algorithm

### Step-01:
 
    Define a list OPEN.
    Initially, OPEN consists solely of a single node, the start node S.
 
### Step-02:
 
    If the list is empty, return failure and exit.
 
### Step-03:
 
    Remove node n with the smallest value of f(n) from OPEN and move it to list CLOSED.
    If node n is a goal state, return success and exit.
 
### Step-04:

    Expand node n.
 
### Step-05:
 
    If any successor to n is the goal node, return success and the solution by tracing the path from the goal node to S.
    Otherwise, go to Step-06.
 
### Step-06:
 
    For each successor node,
    Apply the evaluation function f to the node.
    If the node has not been in either list, add it to OPEN.
 
### Step-07:
    Go back to Step-02.
