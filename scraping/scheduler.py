from time import sleep
import datetime

from apscheduler.schedulers.background import BackgroundScheduler

sched = BackgroundScheduler()
#sched.start()

# define the function that is to be executed
# it will be executed in a thread by the scheduler
def my_job(text):
    print(text)
 
#def main():
    # job = sched.add_date_job(my_job, datetime(2013, 8, 5, 23, 47, 5), ['text'])

print("before")
job = sched.add_job(my_job, 'date', run_date=datetime(2016, 4, 1, 15, 4, 0, 0), args=['JAJAJAJAJAJAJAJAJAJAJAJA'])
print("after")

sched.start()
#    while True:
#	    print("hello")
#	    sleep(1)

print("here")
#PyDateTime_FromDateAndTime(int year, int month, int day, int hour, int minute, int second, int usecond)
##############################################################
 
#if __name__ == "__main__":
#    main()

