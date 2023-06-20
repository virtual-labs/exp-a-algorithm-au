# Theory
A* Search algorithm is one of the best and popular techniques used in path-finding and graph traversals.
It is a searching algorithm that is used to find the shortest path between an initial and a final point.
The A* Search Algorithm also uses a heuristic function that provides additional information regarding how 
far away from the goal node we are.
    
# Algorithm For A* search

Define\
OPEN = []      List of open nodes\
CLOSED = []    List of closed nodes\
S              Start node 

Step-01:\ 
Define a list OPEN.\
Initially, OPEN consists solely of a single node, the start node S.
 
Step-02: \
If the list is empty, return failure and exit.
 
Step-03:\
Remove node n with the smallest value of f(n) from OPEN and move it to list CLOSED.\
If node n is a goal state, return success and exit.
 
Step-04:\
Expand node n.
 
Step-05:\
If any successor to n is the goal node, return success and the solution by tracing the path from the S to goal node.\
Otherwise, go to Step-06.

Step-06: \
For each successor node,\
Apply the evaluation function f to the node.\
If the node has not been in either list, add it to OPEN.
 
Step-07:\
Go back to Step-02.

![image_of_simulation](../Screenshot_2.png)