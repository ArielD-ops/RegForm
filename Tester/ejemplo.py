# archivo de python generado por selenium 

# en las primeras lineas importo las librerias para poder ejecutarlo
# si no tengo las librerias instaladas ... se instalan abriendo una terminal y ejecutando
# pip install pytest

import pytest
import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

# aca se crea una clase que tiene 3 metodos 
# un setup que se ejecuta posterior a la instancia
# un test que es el que se ejecuta
# un teardown que se ejecuta para cerrar el chromedriver
class TestTest2():
  def setup_method(self, method):
    self.driver = webdriver.Chrome()
    self.vars = {}
  
  def teardown_method(self, method):
    self.driver.quit()
  
  def test_test2(self):
    self.driver.get("https://aulasvirtuales.bue.edu.ar/")
    self.driver.set_window_size(968, 1020)
    time.sleep(1)
    self.driver.find_element(By.ID, "shortsearchbox").click()
    self.driver.find_element(By.ID, "shortsearchbox").send_keys("plomeria")
    time.sleep(1)
    self.driver.find_element(By.CSS_SELECTOR, ".btn:nth-child(4)").click()
    
  
# aca voy a instanciar la clase(crear el objeto)
# y ejecutar el test
# y cerrar el chromedriver
test = TestTest2() # a partir de esta linea test es un ojbeto con todas las caracteristicas de la clase TestTest2
test.setup_method(None)
test.test_test2()
time.sleep(5)
test.teardown_method(None)