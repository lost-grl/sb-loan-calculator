describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should update server table with server info', function () {
    submitServerInfo();
    const rows = document.querySelectorAll("#serverTable tr")
    expect(rows.length).toEqual(2);
  })

  afterEach(function() {
    // teardown logic
    serverId = 0;
    serverTbody.innerHTML = '';
  });
});
