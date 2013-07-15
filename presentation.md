Selenium Conf 2013
===

//

                <section class="cars" id="cars-profiler" data-background="#4DD62B">
                    <p>Profiling durante testes </p>
                    <p>Compuware</p>
                </section>

recomendar talk sobre IE Driver

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
        * groupon


    * New tools
        * Appium 
        * selenium-builder
        * Marionette
        * Selenium Grid

    * Cutting-edge ideas
        * layout comparison (domreactor + redglass / jenkins plugin @ shutterfly)
        * Continuous improvement - Noah Sussmann
        * google?

        * Bringing selenium to the rest of the company (maybe?)        

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
        * layout comparison (domreactor + redglass / jenkins plugin @ shutterfly)
        * Continuous improvement - Noah Sussmann
        * google?

        * Bringing selenium to the rest of the company (maybe?)        


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

    * "move fast and break things"

Como eles trabalham

    * Life of a code change
        1. Sandbox
        2. Code review
        3. Trunk **
        4. Release branch **
        5. 1 billion users

automacao de deploys

    1 week no trunk, depois release

    * tonight we test in prod
    X!!


e porque funciona?

    * todo engenheiro é responsável pela feature inteira, inclusive testes

    * opt-in por releases diarios

    * code-reviews / run during tests

phabricator

    * pic 

Their suite
---  

    * speed > completeness => results in 10 minutes  
    * convince people to write more focused tests
    * if a test becomes flaky, 24 hours to fix it or it's deleted
    * test in the same language as the application codebase

    //probably not important
        * tried testing use ruby + watir, but didn't get much traction.
        * switched to php webdriver
        * they create link ids to html elements that aren't rendered in production, used for tests
        "Tests don't become as fragile".


Groupon
---

    * "Stability is a journey, not a destination"

Tips:

    * Tips 'n' tricks
        - evaluate_script("jQuery.active") == 0
        - evaluate_script('$(":animated").length()') == 0

    * ie tips
        sessao
        mover o mouse na janela durante execucao

1)

    * fast feedback loop
        -> Fight to get build to 10 mins
        -> rspec / cucumber early failure notification (on test fail, email it and devs can look it before the build actually finishes) 

    * Speed up tests
        * does it have to be selenium (unit tests JS!)
            * they have around 4000 javascript unit tests
        * Can it be headless?
        * Can you run jasmine instead?              


2)
    * Flakey detector
        -> If a test was changed, run it 5kx times in 10 mins, in random order


3)
    * Fix environment problems
        -> tests get blamed if environment is at fault
        -> Stardardize test boxes
            - Chef, puppet
            - Same capacity

    * Black hole proxy
        * em-proxy, capture external requests to return 200 OK (twitter/facebook,yahoo would ramdomly slow tests)               

    * Control OS from tests
        * example, screenshot from selenium only takes it from the page, but not the actual desktop
        - https://github.com/groupon/Selenium-Grid-Extras

=====================================================

So, what do we get from all of this?
---

    * Suite de testes estáveis => flakey vai para outra suite?
                               => de olho nos testes que se tornam flakey!

    * speed > completeness => results in 10 minutes
    * convince people to write more focused tests  => jasmine, for example

    * flakyness detector

=====================================================

New tools

    * Appium 
    * SeleniumBuilder

Appium
===

    * aplicacoes mobile nativas / hibridas

    * sem gerar builds especificos

    * Language agnostic

    * Implements JSON WebDriver Api => sample code

    * Client para mac / windows


SeleniumBuilder
===
    
    * Evolucao do Selenium IDE, mas para api do selenium 2

Marionette
===

    * Driver para o Firefox
    * Firefox OS Gecko (engine do Firefox, Thunderbird e Firefox OS)

    /Applications/Firefox.app/Contents/MacOS/firefox -profile /Users/hien/Projects/gaia/profile-debug http://system.gaiamobile.org:8080 -no-remote

    * Interacao com a interface do Firefox
    * Estao portando para suportar a API do webdriver
    * extensions

Cutting-edge ideas
====    
        * layout comparison (domreactor + redglass / jenkins plugin @ shutterfly)
        * Continuous improvement - Noah Sussmann
        * google?

        * Bringing selenium to the rest of the company (maybe?)        


Testes de layout (screenshots)

        * comparacao de layout (mostrar exemplos de discrepancia)

        * domreactor / plugins-jenkins

domreactor
    
        * comparar posicoes absolutas no dom (exemplo de offsetLeft)
            * diferencas entre browsers

        * visao computacional

        * unir as duas estrategias

        => dom reactor (paid!)

Plugin Jenkins

        * shutterfly (faz canecas customizadas)

        * repositorio de screenshots quando testes passam

        * build-flow no jenkins para comparacao


Selenium Grid
---
    * Vagrant

    * Wifi was a problem

    * Graylog



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


*450 ppl

* w3c
    * working on specification

* Number of downloads:
    * Ruby => 5+ million
    * Python => 1+ million

* Driver implementations maintained by vendors

* Selenium 3
    * deprecate RC
    * extension for mobile apps , using existing implementations

* IDE and Builder

* Important things people get wrong:
    * there are no pageobject creators!
    * don't expose selenium 
        * should be high level enough / model services
    * explicit is good; overuse of implicit waits; how they were originated / people would increase the wait in order 

* short feedback cycles

* try to fix flakey tests, separating them from main suite if needed



