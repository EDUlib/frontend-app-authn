3. 2FA for Course Team Accounts
-----------------------------------------

Status
------

Proposed

Context
-------

Course team accounts have a great deal of access to and control over sensitive information as well as the ability to run arbitrary Javascript on the LMS. An attacker who compromises an educator account could do a large amount of damage. To protect our learners (and our reputation) we should require 2FA or other enhanced account security for all accounts with these elevated permissions.

An attacker should find it difficult to gain access to the privileged aspects of an educator's account (even if in possession of their password).


Proposed Solutions
------------------

Option 1: Enable Two Factor Authentication (2FA)

Option 2: Ask users for their password before specific restricted actions on site

Option 3: Reset password after a specific time period


Decision
--------

We have decided to go with Option 1. We will enable **Two Factor Authentication** (2FA) for user accounts that belong to course teams (in some cases these can be staff accounts as well).

This change can be accommodated within our current login flow. A high level flow of this process is as follow:

- A user belonging to a course team will authenticate themselves like they currently do, either by providing login credentials or by SSO.
- Once they have authenticated successfully they will be sent an automatically generated authentication code to their primary email address.
- The user will prompted to enter the code sent to their email address.
- After successful verification of code, assign a session to user.

Why choose 2FA?
***************

- It is a conventional way to secure user accounts.
- We can protect staff users at the first step they take on our site i.e authentication.
- Development wise it will not require extensive effort as compared to the second option.


Enhancements to above approach
******************************

- We could reduce session expiration time only for course team users. Currently session expiration time is four weeks and we can reduce this time to two weeks for educator accounts.
- We can also go with the first (2FA) and third (Reset password after a specific time period) option simultaneously.

Consequences
------------

Adds an additional step for some users which can negatively affect the user experience.

References
----------

Corresponding Security Ticket:
https://2u-internal.atlassian.net/browse/SEG-96

Detailed analysis of all security enhancements options provided above can be found here:
https://openedx.atlassian.net/l/c/3HKHjZY4
