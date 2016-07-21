$scope.updated = new Date().toString();
// $sce.trustAsHtml(decodeURIComponent($rootScope.documents[v]))
/*
		$scope.popUp.show(
			{
				id:'Loading list',
				message:'Loading list...',
				timein:1000,
				timeout:8000,
				callIn:function(popid) {
					//
					//url : 'http://' + cache_servers[0] + ':8880/cache36000/http://pingiping.com/micro_service/pageHub/',
					$http({
						method :'POST',
					//	url : 'http://pingiping.com/micro_service/pageHub/',
						url : 'http://' + 'cache1.qalet.com' + '/cache360000/http://pingiping.com/micro_service/pageHub/',
						data : {postData:param, cookie:$cookies.getAll()}
					}).success(
						function(data) {
							$scope.list = data.data;
							$scope.param = param;
							delete $scope.current_rec;
							for(var i = 0; i < $scope.list.length; i++) {
								$scope.list[i]['list_id'] = 'ad_' + i;
								$scope.list[i]['imghub'] = 'http://' + cache_servers[i % 2] + '/cache36000/'+$scope.list[i]['picture'];
								$scope.list[i]['pic'] = $scope.list[i]['imghub'].replace('_S.', '.');
								
							}
							$scope.popUp.hide(popid);
						}
					);
	
				}				
			}		
		);		

*/
