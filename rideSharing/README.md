Input Commands & Format
ADD_DRIVER <DRIVER_ID> <X_COORDINATE> <Y_COORDINATE>
 

 The ADD_DRIVER command allows a driver to join the service. The command should take in the driver's id and current location (x_coordinate and y_coordinate) as arguments.
 

ADD_RIDER <RIDER_ID> <X_COORDINATE> <Y_COORDINATE>
 

 The ADD_RIDER command allows a rider to request a ride. The command should take in the rider's id, current location (x_coordinate and y_coordinate), as arguments.
 

MATCH <RIDER_ID>
 

 Matches the rider with the nearest available drivers within 5 kms distance. Print nearest 5 drivers ids in ascending order of their distance from the rider in the following format. In the event of multiple drivers being equidistant, print them in lexicographical order.:
 

 DRIVERS_MATCHED <DRIVER_ID1> <DRIVER_ID2> ... <DRIVER_ID5> 
 If no drivers are available then print ‘NO_DRIVERS_AVAILABLE’
 
START_RIDE <RIDE_ID> <N> <RIDER_ID>
 

 Start the ride with the Nth Driver (1 >= N <= 5). If the match has fewer than N number of drivers, driver is not available, or <RIDE_ID> already exists, then print ‘INVALID_RIDE’ otherwise, print ‘RIDE_STARTED <RIDE_ID>’.
 

STOP_RIDE <RIDE_ID> <DESTINATION_X_COORDINATE> <DESTINATION_Y_COORDINATE> <TIME_TAKEN_IN_MIN>
 

 If the <RIDE_ID> does not exist, or the ride is already stopped, then print ‘INVALID_RIDE’, otherwise, Print ‘RIDE_STOPPED <RIDE_ID>’
 

BILL <RIDE_ID>
 

 Print the total bill of the ride in the format ‘BILL <RIDE_ID> <DRIVER_ID> <AMOUNT>’. To calculate the total bill use the following formula: 
 

 A base fare of ₹50 is charged for every ride. 
 An additional ₹6.5 is charged for every kilometer traveled. 
 An additional ₹2 is charged for every minute spent in the ride. 
 A service tax of 20% is added to the final amount.
 
 Note:
 

 If the ride is not completed then print “RIDE_NOT_COMPLETED” 
 If the <RIDE_ID> does not exist, then print ‘INVALID_RIDE’
 
 **input**

ADD_DRIVER D1 1 1
ADD_DRIVER D2 4 5
ADD_DRIVER D3 2 2
ADD_RIDER R1 0 0
MATCHR1
START_RIDE RIDE-001 2 R1
STOP_RIDE RIDE-001 4 5 32
BILLR IDE-001