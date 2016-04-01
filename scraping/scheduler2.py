import datetime

from apscheduler.schedulers.blocking import BlockingScheduler

import sys

sched = BlockingScheduler()

def my_job(text):
    print(text)
    sys.exit("Error message")
    sched.remove_job()

# The job will be executed on November 6th, 2009

run_date = datetime.datetime(2016, 4, 1, 15, 15, 0, 0)

print(run_date)
sched.add_job(my_job, 'date', run_date= datetime.datetime(2016, 4, 1, 15, 20, 0, 0), args=['guuuuuuddaaaaannnnss'])

sched.start()
