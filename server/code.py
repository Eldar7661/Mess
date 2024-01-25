import smtplib, sys, random

login = sys.argv[1]
code_bad = {100000, 111111, 222222, 333333, 444444, 555555, 666666, 777777, 888888, 999999, 123456, 654321}
code = 0
while True:
	code_temp = random.randint(100000, 999999)
	if not(code_temp in code_bad):
		code = code_temp
		break
try:
	smtpObj = smtplib.SMTP('smtp.gmail.com', 587)
	smtpObj.starttls()
	smtpObj.login('--@gmail.com','--')
	smtpObj.sendmail("--@gmail.com", login, str(code))
	smtpObj.quit()
	print(code)
except:
	print(1)
