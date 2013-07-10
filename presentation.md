Selenium Conf 2013
===

//

http://www.colourlovers.com/palette/215539/Yellow_Tree_Frog
http://www.colourlovers.com/palette/159844/Blue_Fox

https://github.com/groupon/Selenium-Grid-Extras
    -> roda em servico, nao da pra tirar SShot

dima's tips: ajax waiting

Focused tests: Javascript / junit

early test failure notification ( precisamos ver isso, e como funciona todos os junit rules..)

anotar as causas comuns de falha de testes
    => Bug na propria api de teste
        => variaveis estaticas
        => Coisas que assumiamos que estava funcionando, mas não.
            => Fazer teste de monitoracao?
    => Tests mau escritos
        => coisas que deveriam estar no after / before
    => Erros de ambiente
        => apontando para o stg de outra equipe
    => Falta de mocks paralelizados

Flakey detector

videos => currently on jenkins slave, but not on nodes

//

Format:

* font: lost_type franchise / blanch

* Overview of the conference
    -> Number of atendees
    -> Pics of Boston


* Three main topics:

    * How companies are implementing Selenium
        * Salesforce.com + cars.com
        * Facebook
        * Mediawiki

    * New tools
        * Appium
        * Selenium Builder

    * Cutting-edge ideas
        * Dima's talks
        * Continuous improvement - Noah Sussmann
        * Marionette
        * RedGlass
        * Bringing selenium to the rest of the company

    * Workshops
        * Selenium Grid
            * Scale of the Grid
            * Monitoring


Draft
=====


    Selenium Conf 2013

Eu
---
    * Desenvolvedor do PagSeguro
        * Manchester
    
    * Automação
    * Suite de testes de Selenium ~500 testes automatizados via Jenkins

    * email: l-scrum-manchester
    * #manchester

Evento
---

    * Adicionar fotos do evento + boston => formato panel    
    * Pequeno porte
    * Saucelabs, Saucelabs everywhere!


Ideias:    
---

    * Como as empresas estão utilizando o Selenium?
        * Salesforce.com / cars.com
        * Facebook
        * Mediawiki

    * Ferramentas
        * Appium
        * Selenium Builder

    * Novas ideias
        * Continuous improvement - Noah Sussmann    
        * Dima's talks
        * RedGlass        
        * Bringing selenium to the rest of the company
        * Marionette


Como as empresas estão utilizando o Selenium?
=====================================================

Salesforce.com ** revisar na apresentação real
---

    * "13.6M test executions every day on shared infrastructure, 1M on selenium"
        * ambientes de dev, stage e prod
        * a cada commit

    * 75K tests
    
    * "Não utilizamos o grid"
        // atraiu muitas pessoas que pensaram que uma ideia revolucionaria seria apresentada.

    * Na nuvem

    * autotest / flakey detector (if it passed historically and started failing..)


Corrigirás o teste
---
* Automatically creates, assigns, closes and reopoen bug reports for test failures

* if tests do not meet failure thresholds (99%), code lines are locked -> new features can't be pushed until fixed by the responsible team
    * Build master role, decides / manages the code lockdown        


Mas.. e o Selenium grid?
---
    * solucao caseira
    * VM "degradavam" com o tempo => reboot das maquinas
    * Não utilizavam todo o poder computacional

Enter the cloud
--- 

    * JClouds to the rescue!
        * VMWare, OpenStack, EC2, Jenkins, SauceLabs

    * "Mas... não demora muito para provisionar máquinas?"
        * provisionamento pré-execução baseado nas rodadas anteriores

    * vm templates

=====================================================

Cars.com
===

* Scrum
* from manual to automated: 100 hours to 2

* releases we've had in 2011 vs today
    (40) to 700

    -> PS: 40 / 50 releases por ano
        -> numero deles: 2-3 releases por dia?

* ~90% time taken by tests reduced (235 hours => 4.5hrs)

* smoke and core tests run daily / regression when pushed to new env
* ibm build forge

Tools, tools, tools
---
* Selenium + java + maven
    * grid
    * testng
    * vmware
    * compuware apm / dynatrace (identify performance issues) -> page load times, jvm monitor
    *regression monitored by that tool
    * sqllite -> para dados nos testes
    * sikuli -> interagir com flash
    * hp quality center
    * buildforge

* they try to automate tests along with features being developed, but don't always get it

* 3000 selenium tests per build

* categorized tests: smoke, regression. 
    * CI runs smoke tests

* runs on multiple browsers


=====================================================

Facebook
---

    * trunk and a release branch

    * Life of a code change

        1. Sandbox
        2. Code review
        3. Trunk
        4. Release branch
        5. 1 billion users

Their suite
---  

    * speed > completeness => results in 10 minutes  
    * convince people to write more focused tests
    * if a test becomes flaky, 24 hours to fix it or it's deleted

    * test in the same language as the application codebase
        * tried testing use ruby + watir, but didn't get much traction.
        * switched to php webdriver
        * they create link ids to html elements that aren't rendered in production, used for tests
        "Tests don't become as fragile".

Mobile app
---

    * was a simple web ui view
        * swtiched to a pure native app, adopting mobile-first. Each team is responsible for creating a  mobile version of their feature


Selenium Grid
---
    * Vagrant

    * Wifi was a problem

    * Graylog

Groupon
---

    * "Stability is a journey, not a destination"

    * Tips 'n' tricks
        - evaluate_script("jQuery.active") == 0
        - evaluate_script('$(":animated").length()') == 0

    * fast feedback loop
        -> Fight to get build to 10 mins
        -> rspec / cucumber early failure notification (on test fail, email it and devs can look it before the build actually finishes) 

    * Flakey detector
        -> If a test was changed, run it 5kx times in 10 mins, in random order

    * Fix environment problems
        -> tests get blamed if environment is at fault
        -> Stardardize test boxes
            - Chef, puppet
            - Same capacity

    * Speed up tests
        * does it have to be selenium (unit tests JS!)
            * they have around 4000 javascript unit tests
        * Can it be headless?
        * Can you run jasmine instead?      

    * Black hole proxy
        * em-proxy, capture external requests to return 200 OK (twitter/facebook,yahoo would ramdomly slow tests)               

    * Control OS from tests
        * example, screenshot from selenium only takes it from the page, but not the actual desktop
        - https://github.com/groupon/Selenium-Grid-Extras

=====================================================

So, what do we get from all of this?
---

    * Suite de testes estáveis => flakey vai para outra suite
    * speed > completeness => results in 10 minutes
    * convince people to write more focused tests  => jasmine, for example

=====================================================

New tools

    * Appium 
    * SeleniumBuilder

Appium
===

    * Language agnostic    

    * Implements JSON WebDriver Api => sample code

    * Client para mac

    * Piadas sobre Windows users! 

SeleniumBuilder
===
    
    * Evolucao do Selenium IDE, mas para api do selenium 2

Cutting-edge ideas
====    
        * Dima's talks
        * Continuous improvement - Noah Sussmann
        * Marionette
        * RedGlass
        * Bringing selenium to the rest of the company

Dima
---
    * Selenium-grid-extras
    * UX testing (screenshots)


Continuous Improvement
---

* continuous delivery: 
    * deliver multiple times a day, powered by tests (selenium), CI

    * config flags, dark features

    * Complex systems: web systems are an example
        - sites aren't built to specifications
        - behaviors are found out during production
        
        - comparison with mission critical systems
            - built in 10 years, not feasible for our kind of systems
            - it's simply impossible to find all the bugs

    * with continuous delivery, we need to have running tests to assure quality in production

    * what is the role of a QA ?
        * exploratory testing. focusing on user experience
        * QA looking at logs. Approach them to the code
        * monitoring
        * Issue in production caught by monitoring. Prod and dev used the same network switch, causing 1 minute outages


State of Union
====        






